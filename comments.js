/*
comments.js
yt-comment-viewer by minif

Handle everything related to storing comments. Contains functions to add, remove, sort, and output comments
*/

//Namespace for handling comments
var comments = {
	commentArray: [],
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

		for (i=0; i<listOfComments.length; i++) {
			var message = {
				timestamp: 
					listOfComments[i].snippet.topLevelComment.snippet.publishedAt,
				username: 
					listOfComments[i].snippet.topLevelComment.snippet.authorDisplayName,
				pfp: 
					listOfComments[i].snippet.topLevelComment.snippet.authorProfileImageUrl,
				message: 
					listOfComments[i].snippet.topLevelComment.snippet.textDisplay,
				likes: 
					listOfComments[i].snippet.topLevelComment.snippet.likeCount,
			}

			this.commentArray.push(message);
		}
	},
};