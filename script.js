function upload() {
	//Upload file
	var selectedFile = document.getElementById('input').files[0];
	var reader = new FileReader();
	reader.onload = function(e) {
		JSONFile = JSON.parse(e.target.result);
		comments.parseJSON(JSONFile);
		comments.addComments();
	}
	reader.readAsText(selectedFile);
}

async function asyncCall() {
  comments.addComments();
}

function next() {
	alert("loading "+totalComments)
	comments.parseJSON(JSONFile, totalComments, commentsAtOnce);
	totalComments+=commentsAtOnce;
	comments.addComments();
}

function clearAll() {
	comments.clearAll();
	uiHandler.clearAll();
	totalComments = 0;
}