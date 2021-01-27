function findMatches() {
	var dictionary = document.getElementById("dictionary").value;
	if (!dictionary) {
		alert("Please enter dictionary values");
		return;
	}
	dict_words = dictionary.split('\n');
	
	var match_text = document.getElementById("match_text").value;
	if (!match_text) {
		alert("Please enter the matching text to search for");
		return;
	}

	var match_type = document.querySelector('input[name="match_type"]:checked');
	if (!match_type) {
		alert("Please enter the type of matching");
		return;
	}
	match_type = match_type.value;
	
	var matches = document.getElementById("matches");
	matches.value = "";
	
	var match_count = 0;
	for (var d in dict_words) {
		if ((match_type == "prefix" && dict_words[d].startsWith(match_text))
		  || (match_type == "suffix" && dict_words[d].endsWith(match_text))
		  || (match_type == "contains" && dict_words[d].indexOf(match_text) != -1)) {
			matches.value += dict_words[d] + '\n';
			match_count++;
		}
	}
	document.getElementById("match_count").innerHTML = match_count + " matches found";
}

function createExercise() {
	var suffix = document.getElementById("suffix").value;
	var matches = document.getElementById("matches").value.split("\n");
	
	var exercise = document.getElementById("exercise");
	exercise.value = "vvv vvv vvv\n";
	for (var m in matches) {
		for (var i = 0; i < 3; i++) {
			exercise.value += suffix + "  ";
		}
		exercise.value += "\n";
		for (var i = 0; i < 3; i++) {
			exercise.value += matches[m] + "  ";
		}
		exercise.value += "\n";
	}
	
}
