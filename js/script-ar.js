var textToSpeechConverter = document.getElementById("textToSpeechConverter");
var textField = document.getElementById("textField");
var speak = document.getElementsByClassName("speak");
var speech = document.getElementsByClassName("speech");

textToSpeechConverter.addEventListener('submit', talk, false);

function talk(e) {
	e.preventDefault();
	//var text = $('input[name="text"]').val();
	var text = textField.value;
	text = encodeURIComponent(text);
	var url = "http://translate.google.com/translate_tts?tl=ar&q=" + text + "&client=tw-ob";
	$('audio').attr('src',url).get(0).play();
	//$('.speech').attr('src',url).get(0).play();		
}
