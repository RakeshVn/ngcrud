var assert  	= require('assert');
var db_config	= require('./db_config')

db_config.client.connect(function (err) {
	assert.ifError(err);
});

var total_count;
var insert_count = 0

module.exports = {

	count : function(count){
		total_count = count
	},
	
	posts_count : function(count){
		posts_count = count
	},

	insert_screenname : function(screen_name,keyword,time,count){
		const query = 'insert into twitter_sn (screen_name,keyword,time) values (?,?,?)';
		const params = [screen_name,keyword,time];
		db_config.client.execute(query, params, { prepare: true }, function (err) {
			if(err)
				console.log("error in insert_screenname")
			else{
				insert_count++ ;
				if(total_count==insert_count)
					console.log(" total\tscreen_names inserted\t : "+insert_count);
			}
		});
	},

	insert_post : function(screen_name,followers_count,friends_count,keyword,lang,location){
		const query = 'insert into twitter_ps (screen_name,followers_count,friends_count,keyword,lang,location) values (?,?,?,?,?,?)';
		const params = [screen_name,followers_count,friends_count,keyword,lang,location];
		db_config.client.execute(query, params, { prepare: true }, function (err) {
			if(err)
				console.log("insertion error in insert_screenname")
		});
	}
}