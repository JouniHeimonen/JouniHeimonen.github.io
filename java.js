//https://api.open-meteo.com/v1/forecast?&current=temperature_2m,apparent_temperature&timeformat=unixtime&forecast_days=1

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "Jouni Heimonen");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! How are you today?" ;
    }
    document.getElementById("nappi").innerHTML = text;
  }

 function getWeather (){
    fetch("https://api.open-meteo.com/v1/forecast?latitude=64&longitude=26&current=temperature_2m,apparent_temperature&timeformat=unixtime&timezone=Europe%2FMoscow&forecast_days=1", {
        method: 'GET', 
        headers: {
       
        },
                 
      }).then(response => {
        if (!response.ok) {
          throw response; //check the http response code and if isn't ok then throw the response as an error
        }
                  
        return response.json(); //parse the result as JSON
      
      }).then(response => {
        //response now contains parsed JSON ready for use
        processWeatherData(response);
      
      }).catch((errorResponse) => {
        if (errorResponse.text) { //additional error information
          errorResponse.text().then( errorMessage => {
            //errorMessage now returns the response body which includes the full error message
          })
        } else {
          //no additional error information 
        } 
      });

 }
 function processWeatherData(response) {
    console.log(response)
   
    var temperature2 = response.current.temperature_2m;
    var apparent_temp = response.current.apparent_temperature;
    console.log(temperature2, apparent_temp);

    text = "Current temperature is " +temperature2 +" and apparent temperature is " +apparent_temp;
    document.getElementById("nappi2").innerHTML = text;
  }

 