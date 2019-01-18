$(document).ready(function() {
	$(".language-button").click(function() {

	  function SpanishOn() {
		$(".language-button").html("English");
		$(".english-text").hide();
		$(".spanish-text").show();
	}

	  function SpanishOff() {
		$(".language-button").html("Español");
		$(".spanish-text").hide();
		$(".english-text").show();
	}

	return (this.tog = !this.tog) ? SpanishOn() : SpanishOff();
	})
})