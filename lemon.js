"use strict";

function DaySelection7(){
	for(var daysleft=7; daysleft>0; daysleft = daysleft-1){

	}
		
}
function DaySelection14(){
	for(var daysleft=14;daysleft>0; daysleft--);
}
function DaySelection21(){
	for(var daysleft=21;daysleft>0; --daysleft);
}
{
	console.log("WEATHER TODAY")
}
function WeatherGenerator(){

	var weatherstatus;

	var randomnumber = Math.floor(Math.random() * (100 - 1 + 1)) + 0;

	if (randomnumber <=25){
		console.log ("Sunny");
    weatherstatus = "Sunny";
  	}
	else if (randomnumber>25 && randomnumber <=55){
		console.log ("Rain");
    weatherstatus = "Rain";
	}
	else if (randomnumber>55 && randomnumber <=80){
		console.log ("Cloud");
    weatherstatus = "Cloud";
	}
	else if (randomnumber>80 && randomnumber <=100){
		console.log ("Storm");
    weatherstatus = "Storm";
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
		console.log ("It's Cold outside!");
    temperaturestatus = "cold";
  	}
	else if (randomnumber>25 && randomnumber <=55){
		console.log ("It's Warm outside!");
   temperaturestatus = "warm";
	}
	else if (randomnumber>55 && randomnumber <=75){
		console.log ("It's Hot outside!");
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
	console.log("FORECAST TOMORROW!")
	var weather = WeatherGenerator();
	var temperature = TemperatureGenerator();
	var prediction = (weatherstatus,temperaturestatus);
		
		return prediction;
}
	var predictionstatus;
		predictionstatus =WeatherPrediction();



function LemonsBought(){
	var numberoflemons;
	numberoflemons = prompt("enter # of lemons to buy"); 
		console.log("you bought", numberoflemons, "lemons!");
		return numberoflemons;
}
	var resultlemons;
	resultlemons = LemonsBought();

function SetPriceLemons(){
var price;
	price = (.12)
	return price;
}
	var pricelemons;
		pricelemons = SetPriceLemons();

function CurrentMoney(lemonsbought,setpricelemons){
	var money = (20);
	var moneyremain = money - setpricelemons*lemonsbought
		console.log("you currently have", moneyremain, "left...")
		return money;
}
	var moneyleft;
		moneyleft = CurrentMoney(resultlemons,pricelemons);

function SetPriceSugar(){
	var price;
	price = (.08) 
		return price;
}
	var pricesugar;
		pricesugar = SetPriceSugar();
