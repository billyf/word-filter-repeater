function findMatches() {
	var dictionary = document.getElementById("dictionary").value;
	if (!dictionary) {
		alert("Please enter dictionary values");
		return;
	}
	dict_words = dictionary.split('\n');
	
	var suffix = document.getElementById("suffix").value;
	if (!suffix) {
		alert("Please enter the suffix to search for");
		return;
	}
	
	var matches = document.getElementById("matches");
	matches.value = "";
	
	for (var d in dict_words) {
		if (dict_words[d].endsWith(suffix)) {
			matches.value += dict_words[d] + '\n';
		}
	}
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
