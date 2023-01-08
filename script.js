function upload() {
	//Upload file
	var selectedFile = document.getElementById('input').files[0];
	var reader = new FileReader();
	reader.onload = function(e) {
		JSONFile = JSON.parse(e.target.result);
		comments.parseJSON(JSONFile)
	}
	reader.readAsText(selectedFile);
}