$( document ).ready(function() {
    $("#ready").hide();
    $("#hadouken").hide();
    $("#cool").hide();
	$("#fireball").hide();
    $("img").mousedown(function() {
    	playHadouken();
    	$("#still").hide();
    	$("#ready").hide();
    	$("#cool").hide();
    	$("#hadouken").show();
    	$("#fireball").finish().show().animate(
    		{marginLeft: "20%"},
			function() {
    			$(this).hide();
    			$(this).css('margin-left', '-16%');
    		});
    });
    $("img").mouseup(function() {
    	$("#hadouken").hide();
    	$("#cool").hide();
    	$("#ready").hide();
    	$("#still").show();
    });
    $("#container").mouseenter(function() {
    	$("#still").hide();
    	$("#ready").show();
    	$("#cool").hide();
    });
    $("#container").mouseleave(function() {
    	$("#ready").hide();
    	$("#cool").hide();
    	$("#still").show();
    });
    $("body").keydown(function() {
    	if (event.which == 88) {
    	$("#cool").show();
    	$("#still").hide();
    	$("#ready").hide();
    	}
    });
    $("body").keyup(function() {
    	$("#cool").hide();
    	$("#ready").hide();
    	$("#still").show();
    });
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.2;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}