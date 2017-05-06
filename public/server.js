const express = require('express');
const http = require('http');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('instagrarm.db');
const appServer = express();
const port = 8081;

appServer.use(express.static(path.join(__dirname, 'public')));

http.createServer(appServer).listen(port, function() {
   console.log(`Express server listening on port ${port}`);
});
