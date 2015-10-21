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
    	$("#still").show();
    });
    $("#container").mouseenter(function() {
    	$("#still").hide();
    	$("#ready").show();
    });
    $("#container").mouseleave(function() {
    	$("#ready").hide();
    	$("#still").show();
    });

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}