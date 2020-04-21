const { open } = require('sqlite');
const { Database } = require('sqlite3');
const { appendFileSync, existsSync } = require('fs');

if (process.argv.length < 4) return console.error('Specify:'
    +'\n1. Table Name'
    +'\n2. ABSOLUTE path to database that script should read from'
    +'\n3. (Optional) Filename to write content to (it will appear in the same folder as this script)'
);

let tablename = process.argv[2];
let dbpath = process.argv[3];
let filename = process.argv[4] || 'mongo';

if (!existsSync(dbpath)) return console.error(`File ${dbpath} doesn't exist!`);

open({
    filename: dbpath,
    driver: Database
}).then(async db => {
    let xd = await db.all(`SELECT * FROM ${tablename}`);
    console.log(`Loaded table ${tablename}!`);
    for (let i = 0; i < xd.length; i++){
        console.log(`Attempting to append row ${i+1}/${xd.length}`);
        appendFileSync(`${__dirname}/${filename}.json`, JSON.stringify(xd[i])+'\n');
    }
    console.log(`Finished! Mongo dump file is available at: ${__dirname}/${filename}.json`);
});