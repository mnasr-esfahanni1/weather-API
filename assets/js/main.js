console.log("test");


document.addEventListener('DOMContentLoaded', () => {
    const selectedCity = document.getElementById('location_city').value;
    getWeather(selectedCity);
  });
  
  document.getElementById('submit').addEventListener('click', () => {
    const selectedCity = document.getElementById('location_city').value;
    getWeather(selectedCity);
  });

  async function getWeather(city){
    try{
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=0696c4053e4248b180e33947231310&q=${city}&aqi=no`);
        const data = await response.json();


        console.log(data);
        console.log(data.current.condition.code);


        // location
        const location = document.getElementById(`locationName`);
        location.innerHTML= `${data.location.name}  ,&nbsp  ${data.location.region} `

        //weatherIcon
        const weatherIcon = document.getElementById(`weatherIcon`);
        const weatherName = document.getElementById(`weatherName`);
        weatherIcon.innerHTML= `<img src="${data.current.condition.icon}"> `
        weatherName.innerHTML=`${data.current.condition.text}`

        //temp
        const temp = document.getElementById(`TempName`);
        temp.innerHTML= `${data.current.temp_c}  ,&nbsp &nbsp`
            //feels like
            const feelslike = document.getElementById(`fleeslike`);
            feelslike.innerHTML= `${data.current.feelslike_c}  `

        //Time

        const TimeName = document.getElementById(`TimeName`);
        TimeName.innerHTML= `${data.location.localtime}   `
        

 
    }catch(error ){
        console.log(`😞  Noop! ${error}`)

    }


};
