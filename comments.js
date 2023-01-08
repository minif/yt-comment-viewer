var DEBUG;
/*
comments.js
yt-comment-viewer by minif

Handle everything related to storing comments. Contains functions to add, remove, sort, and output comments
*/

//Namespace for handling comments
var comments = {
	commentArray: [],
	done: true,
	
	/*
	parseJSON
 	Adds comments into commentArray
	*/
	parseJSON: function(comments) {
		//Determine if raw YT Json or if array of comments:
		var listOfComments;
		if (JSONFile.result != undefined) {
			//Raw JSON
			listOfComments = comments.result.items;
		} else if (JSONFile[0] != undefined) {
			//Shortened array
			listOfComments = comments;
		} else {
			alert("Error reading JSON!")
			return;
		}

		//console.log(listOfComments);
		this.done='false';
		for (i=0; i<listOfComments.length; i++) {
			var replies = [];
			if (listOfComments[i].replies != undefined) {
				//Unknown if this always exists, but either way handle replies
				for (j=0; j<listOfComments[i].replies.comments.length; j++) {
					var snippet = listOfComments[i].replies.comments[j].snippet;
					var message = {
						timestamp: 
							snippet.publishedAt,
						username: 
							snippet.authorDisplayName,
						pfp: 
							snippet.authorProfileImageUrl,
						message: 
							snippet.textDisplay,
						likes: 
							snippet.likeCount,
						url: 
							snippet.authorChannelUrl,
					};
					replies.unshift(message);
				}
			}
			var snippet = listOfComments[i].snippet.topLevelComment.snippet;
			var message = {
				timestamp: 
					snippet.publishedAt,
				username: 
					snippet.authorDisplayName,
				pfp: 
					snippet.authorProfileImageUrl,
				message: 
					snippet.textDisplay,
				likes: 
					snippet.likeCount,
				replies:
					replies,
				url: 
					snippet.authorChannelUrl,
			};

			this.commentArray.push(message);
		}
		this.done='true';
	},

	/*
	addComments
 	Uses ui-handler to add comments to page
	*/
	addComments: function() {
		uiHandler.clearAll();
		//addPost: function(username, pfp, date, message, likes, isReply) 
		for (i=0;i<this.commentArray.length;i++) {
			uiHandler.addPost(
				this.commentArray[i].username,
				this.commentArray[i].pfp,
				this.commentArray[i].timestamp,
				this.commentArray[i].message,
				this.commentArray[i].likes,
				this.commentArray[i].url,
				
				false
			)
			for (j=0; j<this.commentArray[i].replies.length; j++) {
				uiHandler.addPost(
					this.commentArray[i].replies[j].username,
					this.commentArray[i].replies[j].pfp,
					this.commentArray[i].replies[j].timestamp,
					this.commentArray[i].replies[j].message,
					this.commentArray[i].replies[j].likes,
					this.commentArray[i].replies[j].url,
					true
				)
			}
		}
	},

	/*

	*/
	clearAll: function() {
		this.commentArray = [];
	}
};