function findMatches() {
	var dictionary = document.getElementById("dictionary").value;
	if (!dictionary) {
		alert("Please enter dictionary values");
		return;
	}
	dict_words = dictionary.trim().split('\n');
	
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
	
	var match_list = [];
	for (var d in dict_words) {
		if ((match_type == "prefix" && dict_words[d].toLowerCase().startsWith(match_text.toLowerCase()))
		  || (match_type == "suffix" && dict_words[d].toLowerCase().endsWith(match_text.toLowerCase()))
		  || (match_type == "contains" && dict_words[d].toLowerCase().indexOf(match_text.toLowerCase()) != -1)) {
			match_list.push(dict_words[d]);
			//matches.value += dict_words[d] + '\n';
		}
	}
	if (document.getElementById("randomize").checked) {
		match_list = shuffle(match_list);
	}
	for (var m in match_list) {
		matches.value += match_list[m] + '\n';
	}
	document.getElementById("match_count").innerHTML = match_list.length + " matches found";
}

// https://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function generateRepeatedLine(text) {
	var line = "";
	for (var i = 0; i < 2; i++) {
		line += text + " ";
	}
	line += text + "\n";
	return line;
}

function createExercise() {
	var match_text = document.getElementById("match_text").value;
	var matches = document.getElementById("matches").value.split("\n");
	
	var exercise = document.getElementById("exercise");
	exercise.value = "vvv vvv vvv\n";
	for (var m in matches) {
		exercise.value += generateRepeatedLine(match_text);
		exercise.value += generateRepeatedLine(matches[m]);
	}
	renderPlayer(exercise.value);
}

function renderPlayer(exercise) {
	var m = new jscw();
	var wpm = document.getElementById("player_wpm").value.trim()
	m.setWpm(wpm);
	m.setEff(wpm);
	m.setEws(1);
	var tone = document.getElementById("player_hz").value.trim()
	m.setFreq(tone);
	exercise = exercise.replaceAll('\n', ' ');
	m.setText(exercise);
	m.renderPlayer('player', m);
}
