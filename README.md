### Sqlite2MongoDB
A quick and easy to use script that reads all records from one table in sqlite database and converts it into a JSON file, that you can import to MongoDB with Mongo Community Compass.

### Setup
1. Make sure you have npm and node installed (Run `npm -v` and `node -v` to verify)
2. Clone this repo
3. Run `npm i` to install packages
4. Run with `node . <table name> <sqlite_path> <dump_filename>`