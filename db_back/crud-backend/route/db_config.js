ini     		= require('ini');
var assert  	= require('assert');
var cassandra 	= require('cassandra-driver');
var fs      	= require('fs');
var dbconfig 	= ini.parse(fs.readFileSync('./db.ini', 'utf-8'));

var hostname = dbconfig.CASSANDRA.hostname;
var username = dbconfig.CASSANDRA.username;
var keyspace = dbconfig.CASSANDRA.keyspace;
var password = decodeURIComponent(dbconfig.CASSANDRA.password);

const authProvider = new cassandra.auth.PlainTextAuthProvider(username,password);
const client = new cassandra.Client({contactPoints: [hostname],authProvider:authProvider, keyspace: keyspace,poolSize:100});
client.connect(function (err) {
	assert.ifError(err);
});

module.exports = {
	client
}