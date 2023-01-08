/*
ui-handler.js
yt-comment-viewer by minif

Constructs and displays the comments.
*/

//Namespace for anything UI related
var uiHandler = {
	commentDiv: document.getElementById('ytcommentcontiner'),
	loadMore: document.getElementById('next'),
	/*
	clearAll
		Removes all comments from the UI
	*/
	clearAll: function() {
		this.commentDiv.innerHTML = "";
	},

	/*
	addPost
		Adds a comment to the UI
	*/
	addPost: function(username, pfp, date, message, likes, url, isReply) {
		/*
		Structure:
		ytcontainer
			ytcomment
					ytpfp
					ytcontent
						ytchannelname
						ytothertext
						yttext
						ytlikebar
								ytreply
								ytdot
								ytlikes
								like image
								dislike image
		*/

		var ytcontainer = document.createElement("div");
		ytcontainer.className = 'ytcontainer';

		var ytcomment = document.createElement("div");
		ytcomment.className = 'ytcomment';

		var ytpfp = document.createElement("img");
		ytpfp.className = 'ytpfp';
		ytpfp.src = pfp;

		if (isReply) {
			ytreplybox = document.createElement("div");
			ytreplybox.className = 'ytreplybox';
			ytcomment.appendChild(ytreplybox);
		}

		var ytcontent = document.createElement("div");
		ytcontent.className = 'ytcontent';

		var ytchannelname = document.createElement("a");
		ytchannelname.className = 'yttext ytchannelname';
		ytchannelname.innerText = username;
		ytchannelname.href=url;

		var ytothertext = document.createElement("a");
		ytothertext.className = 'yttext ytothertext';
		ytothertext.innerText = date;

		var ytmessage = document.createElement("p");
		ytmessage.className = 'yttext';
		ytmessage.innerHTML = message;

		var ytlikebar = document.createElement("div");
		ytlikebar.className = 'ytlikebar';

		var ytreply = document.createElement("a");
		ytreply.className = 'yttext ytreply';
		ytreply.innerText = "Reply";

		var ytdot = document.createElement("a");
		ytdot.className = 'yttext ytreply';
		ytdot.innerText = "•";

		var ytlikes = document.createElement("a");
		ytlikes.className = 'yttext ytlikes';
		ytlikes.innerText = likes;

		var likes = document.createElement("img");
		likes.src = "like.png";

		var dislikes = document.createElement("img");
		dislikes.src = "dislike.png";

		//Add everything once done
		ytlikebar.appendChild(ytreply);
		ytlikebar.appendChild(ytdot);
		ytlikebar.appendChild(ytlikes);
		ytlikebar.appendChild(likes);
		ytlikebar.appendChild(dislikes);

		ytcontent.appendChild(ytchannelname);
		ytcontent.appendChild(ytothertext);
		ytcontent.appendChild(ytmessage);
		ytcontent.appendChild(ytlikebar);

		ytcomment.appendChild(ytpfp);
		ytcomment.appendChild(ytcontent);

		ytcontainer.appendChild(ytcomment);

		this.commentDiv.appendChild(ytcontainer);
	},

	showLoadMore: function() {this.loadMore.style.display = "block"},
	hideLoadMore: function() {this.loadMore.style.display = "none"},
};