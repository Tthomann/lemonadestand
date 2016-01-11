"use strict"

function weather(){

var randomnumber;
var weathersystem;

randomnumber = Math.floor(Math.random() * (100 - 0 + 1)) + 0;

	if (randomnumber <=25){
		console.log ("sunny");
    weathersystem = "sunny";
  }
	else if (randomnumber>25 && randomnumber <55){
		console.log ("rain");
    weathersystem = "rain";
	}
	else if (randomnumber>55 && randomnumber <80){
		console.log ("cloud");
    weathersystem = "cloud";
	}
	else if (randomnumber>80 && randomnumber <100){
		console.log ("storm");
    weathersystem = "storm";
	}
		return randomnumber;
 }
 var weathernumber;
	weathernumber=weather();

function condintionalsale(){

	if weathersystem = "sunny";
		modifysale = 1;
	else if weathersystem = "rain";
		modifysale = .5;
	else if weathersystem = "cloud";
		modifysale = .7;
	else if weathersystem = "storm";
		modifysale = 0;
}