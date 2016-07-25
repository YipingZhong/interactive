var time = 45 * 60 + 30;
var initialOffset = '440';
var i = time;

/* Need initial run as interval hasn't yet occured... */
$('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));

var interval = setInterval(function() {
		var min = Math.floor(i / 60);
		var sec = i % 60;
		if (sec >= 10)
		{
			$('h3').html(min+":"+sec);
		}
		else
		{
			$('h3').html(min+":0"+sec);		
		}
		if (i <= 0) {  	
			clearInterval(interval);
			return;
		}
    $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
    i--;  
}, 1000);