"use strict"
function DaySelection7(){
	for(daysleft=7;daysleft>0;daysleft-1);
}
function DaySelection14(){
	for(daysleft=14;daysleft>0;daysleft-1);
}
function DaySelection21(){
	for(daysleft=21;daysleft>0;daysleft-1);
}
function WeatherGenerator(){

var randomnumber;
var weatherstatus;

randomnumber = Math.floor(Math.random() * (100 - 1 + 1)) + 0;

	if (randomnumber <=25){
		console.log ("sunny");
    weatherstatus = "sunny";
  	}
	else if (randomnumber>25 && randomnumber <55){
		console.log ("rain");
    weatherstatus = "rain";
	}
	else if (randomnumber>55 && randomnumber <80){
		console.log ("cloud");
    weatherstatus = "cloud";
	}
	else if (randomnumber>80 && randomnumber <100){
		console.log ("storm");
    weatherstatus = "storm";
	}
		return randomnumber;
 }
 var weatherstatus;
	weatherstatus=WeatherGenerator();

function TemperatureGenerator(){
	var randomnumber;
	var temperaturestatus;

randomnumber = Math.floor(Math.random() * (100 - 1 + 1)) + 0;
temperaturestatus;
	if (randomnumber <=25){
		console.log ("It's cold outside!");
    temperaturestatus = "cold";
  	}
	else if (randomnumber>25 && randomnumber <=50){
		console.log ("It's warm outside!");
   temperaturestatus = "warm";
	}
	else if (randomnumber>55 && randomnumber <=75){
		console.log ("It's hot outside!");
    temperaturestatus = "hot";
	}
	else if (randomnumber>75 && randomnumber <=100){
		console.log ("It's VERY hot outside!");
    temperaturestatus = "VERY hot";
	}
		return randomnumber;
 }
  var temperaturestatus;
	temperaturestatus=TemperatureGenerator();

function WeatherPrediction(){
	var forecast
	var random
		forecast = ["bad","okay","great"];
		random = forecast[Math.floor(Math.random() *forecast.length)];
		console.log(random);
		return forecast;
}
WeatherPrediction();

function CupsBought(){
	var numberofcups;
	numberofcups = prompt("enter # of cups to buy"); 
		return numberofcups;
}
CupsBought();

function LemonsBought(){
	var numberoflemons;
	numberoflemons = prompt("enter # of lemons to buy"); 
		return numberoflemons;
}
LemonsBought();

function SugarBought(){
	var numberofsugar;
	numberofsugar = prompt("enter # of sugar to buy"); 
		return numberofsugar;
}
SugarBought();

function IceBought(){
	var numberofice;
	numberofice = prompt("enter # of ice to buy"); 
		return numberofice;
}
IceBought();

function CupsToMake(){
	var cups;
	cups = prompt("enter # of cups to make")
		return cups;
}
CupsToMake();

function PitchersToMake(){
	var pitchers;
	pitchers = prompt("enter # of pitchers to make")
		return pitchers;
}
PitchersToMake();