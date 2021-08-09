#! /bin/sh 
mongoimport  --uri "mongodb://myuser:1234@localhost:27017/" --db test --collection restaurant  --type json --file /init.json
