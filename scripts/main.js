// JavaScript Document
var clock;
var currentHours;
var currentMinutes;
var currentSeconds;
var currentTimeString;
var body = document.getElementById("body"); 


function stopClock()
	{
		clearInterval(clock);
	}

function timeTravel(time)
	{
		body = document.getElementById("body"); 
		stopClock();
		if ( time == 'dawn')
			{
				// Day
				if ( currentHours > 8 && currentHours < 17)
					{
						body.style.animation="dawn-day 1s reverse";
				}
				// Sunset
				else if ( currentHours > 16 && currentHours < 20 )
					{
						body.style.animation="sunset-night 0.5s";
						setTimeout(function(){body.style.animation="dawn-night 0.5s reverse";},500);
					}
				// Night
				else if ( currentHours > 19 &&  currentHours < 24 || currentHours < 5)
					{
						body.style.animation="dawn-night 1s reverse";	
					}
				currentHours = 6;
				currentMinutes = 0;
				currentSeconds = 0;
				setTimeout(function(){body.style.animation="";},1000);
				document.getElementById("clock").firstChild.nodeValue = "06:00:00";
				body.style.background="#004BFF";
			}
		else if ( time == 'noon' )
			{
				// Dawn
				if ( currentHours > 4 && currentHours < 8 )
					{
						body.style.animation="dawn-day 1s";
					}
				// Sunset
				else if ( currentHours > 16 && currentHours < 20)
					{
						body.style.animation="sunset-day 1s";
					}
				// Night
				else if ( currentHours > 19 &&  currentHours < 24 || currentHours < 5)
					{
						body.style.animation="day-night 1s reverse";
					}
				currentHours = 12;
				currentMinutes = 0;
				currentSeconds = 0;
				body.style.backgroundColor="#0794FA";
				setTimeout(function(){body.style.animation="";},1000);
				document.getElementById("clock").firstChild.nodeValue = "12:00:00";
			}
		else if ( time == 'sunset')
			{
				// Dawn
				if ( currentHours > 4 && currentHours < 8 )
					{
						body.style.animation="dawn-day 0.5s";
						setTimeout(function(){body.style.animation="sunset-day 0.5s reverse";},500);
					}
				// Day
				else if ( currentHours > 7 && currentHours < 17 ) 
					{
                        body.style.animation="sunset-day 1s reverse";
					}
				// Night
				else if ( currentHours > 19 && currentHours < 24 || currentHours < 5 )
					{
						body.style.animation="sunset-night 1s reverse";
					}
				currentHours = 18;
				currentMinutes = 0;
				currentSeconds = 0;
				body.style.background="#D01800";
				setTimeout(function(){body.style.animation="";},1000);
				document.getElementById("clock").firstChild.nodeValue = "18:00:00";				
			}
		else if ( time == 'midnight')
			{
				// Dawn
				if ( currentHours > 4 && currentHours < 8 ) 
					{
						body.style.animation="dawn-night 1s";
					}
				// Day
				else if ( currentHours > 7 && currentHours < 17 )
					{
						body.style.animation="sunset-day 0.5s reverse";
						setTimeout(function(){body.style.animation="sunset-night 0.5s";},500);
					}
				// Sunset
				else if ( currentHours > 16 && currentHours < 20 )
					{
						body.style.animation="sunset-night 1s";
					}
				currentHours = 0;
				currentMinutes = 0;
				currentSeconds = 0;
				body.style.background="#000139";
				setTimeout(function(){body.style.animation="";},1000);
				document.getElementById("clock").firstChild.nodeValue = "00:00:00";
			}
	}

function resetClock()
	{	
		updateClock();
		clock = setInterval(updateClock, 1000);
	}

function updateClock ()
{
  var currentTime = new Date ();

  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var days =
  ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  

  currentHours =  currentTime.getHours ( );
  currentMinutes = currentTime.getMinutes ( );
  currentSeconds = currentTime.getSeconds ( );

	// -------------------------------------------------- Dit voegt een nul voor alle minuten en secondes in de klok, dat ziet er dan zo uit: 17:09:08. Ipv 17:9:8.
  if ( currentMinutes < 10 )
    { 
		currentMinutes = "0" + currentMinutes;
	}
  else 
  {
     currentMinutes = "" + currentMinutes;
  }
  if ( currentSeconds < 10 )
  { currentSeconds = "0" + currentSeconds;
  }
	else {
		currentSeconds = "" + currentSeconds;
	}
  // -------------------------------------------------- Hier worden de gegevens in de klok gezet op de body.
  currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
  var currentDate = days[currentTime.getDay()] + " " + currentTime.getDate() + " " + months[currentTime.getMonth()] + " " + currentTime.getFullYear() ;
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
  document.getElementById("date").firstChild.nodeValue = currentDate;

	// -------------------------------------------------- Gebaseerd op de tijd van de dag, verandert het achtergrond automatisch.
	
  body = document.getElementById("body");
	// Dawn
	if ( currentHours > 4 && currentHours < 8)
		{
			body.style.background="#004BFF";
		}
	// Day
	else if (currentHours > 7 && currentHours < 17)
		{
			body.style.background="#0794FA";
		}
	// Sunset
	else if ( currentHours > 16 && currentHours < 20 )
		{
			body.style.background="#D01800";
		}
	// Night
	else if ( currentHours > 19 && currentHours < 24 || currentHours < 5 )
		{
			body.style.background="#000139";
		}

	}



