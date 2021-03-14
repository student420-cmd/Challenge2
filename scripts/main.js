// JavaScript Document
var clock;
var currentHours;
var currentMinutes;
var currentSeconds;
var currentTimeString;
var a;
var sun = document.getElementById('sun');
var html = document.getElementById("html"); 
var time;
var b;

function stopClock()
	{
		clearInterval(clock);
	}

function timeTravel(time)
	{
		html = document.getElementById("html"); 
		time;
		updateClock(1);
		stopClock();
		if ( time == 'dawn')
			{
				if ( b == 2 || b == 3 && currentHours <= 5 || currentHours >= 19)
					{
						html.style.animation="night-dawn 5s";
						html.style.backgroundColor="#0794FA";
						setTimeout(function(){html.style.animation="";},5000);
					}
				document.getElementById("clock").firstChild.nodeValue = "8:00:00";
				
				b = 0;
			}
		else if ( time == 'noon' )
			{
				if (b == 2 || b == 3 && currentHours <= 8 || currentHours >= 17)
					{
						html.style.animation="night-dawn 5s";
						html.style.backgroundColor="#0794FA";
						setTimeout(function(){html.style.animation="";},5000);
					}
				document.getElementById("clock").firstChild.nodeValue = "12:00:00";
				b = 1;
			}
		else if ( time == 'sunset')
			{
				if (b == 0 || b == 1 && currentHours >= 8 && currentHours <= 17)
					{
						html.style.animation="night-sunset 5s";
						html.style.backgroundColor="#0794FA";
						setTimeout(function(){html.style.animation="";},5000);
					}
				else {
					html.style.animation="sunset-night 5s";
					html.style.background="#000139";
					setTimeout(function(){html.style.animation="";},5000);
				}
				document.getElementById("clock").firstChild.nodeValue = "17:00:00";
				b = 2;
			}
		else if ( time == 'midnight')
			{
				if (b == 0 || b == 1 && currentHours >= 8 || currentHours <= 17) 
					{
						html.style.animation="dawn-night 5s";
						html.style.animation="#0001398";
						setTimeout(function(){html.style.animation="";},5000);
					}
				document.getElementById("clock").firstChild.nodeValue = "00:00:00";
				b = 3;
			}
	}

function resetClock()
	{	
		currentHours;
		clock = setInterval(updateClock, 1000);
		if (b == 0 || b == 1 && currentHours >=8 || currentHours <=17)
		{	
            html.style.animation="sunset-night 5s";
		} 
		else if (b == 2 || b == 3 && currentHours <=8 || currentHours >=17 ) {
			html.style.animation="night-sunset 5s";
		}
		updateClock(0);
	}

function updateClock (a)
{
  var currentTime = new Date ();

  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var days =
  ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  

  currentHours = currentTime.getHours ( );
  currentMinutes = currentTime.getMinutes ( );
  currentSeconds = currentTime.getSeconds ( );
 
  var hoursDeg =  (currentHours * (360/24))-105.5;
  var minutesDeg = currentMinutes * 0.25;
  var secondsDeg = currentSeconds * ( 360/86400 );
  var totalDeg = hoursDeg + minutesDeg + secondsDeg ;

  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
  
  currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
  var currentDay = days[currentTime.getDay()];
  var currentDate = days[currentTime.getDay()] + " " + currentTime.getDate() + " " + months[currentTime.getMonth()] + " " + currentTime.getFullYear() ;
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
  document.getElementById("date").firstChild.nodeValue = currentDate;
	


	
  var sun = document.getElementById('sun');
  sun.style.transform = "rotate(" + totalDeg + "deg)";
  var html = document.getElementById("html");

	if ( totalDeg == 146.5 && a == 0 ){
		html.style.animation= "sunset 7200s" ;
	}
	else if ( totalDeg == 326.5 && a == 0){
		html.style.animation="dawn 7200s";
	}
	else if ( totalDeg > 176.5 && totalDeg < 356.5 && a == 0)  {
		html.style.backgroundColor="#000139";
	}
	else if ( totalDeg < 176.5 && totalDeg > 365.5 && a == 0){
		html.style.backgroundColor="#0794FA";
	}
	

}



