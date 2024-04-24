let form = document.querySelector("#prayerTimes");
let user_inp = document.querySelector("#cityname");
let namaztime = document.querySelector("#namazTime")
let fajrNamaz_print = document.querySelector("#fajr");
let zohrNamaz_print = document.querySelector("#zohr");
let asarNamaz_print = document.querySelector("#asar");
let magribNamaz_print = document.querySelector("#magrib");
let eshaNamaz_print = document.querySelector("#esha");
let country = "Pakistan";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let UserInputValue = user_inp.value;
   
  namaztime.innerHTML = " ";
  fajrNamaz_print.innerHTML = " ";
  zohrNamaz_print.innerHTML = " ";
  asarNamaz_print.innerHTML = " ";
  magribNamaz_print.innerHTML = " ";
  eshaNamaz_print.innerHTML =  " ";

  let pakistanCities = ['Karachi','Islamabad','Lahore','Multan','Rawalpindi','Hyderabad','MirphurKhas', 'Sukkar','Jamshoro','Sialkot','Faislabad','Quetta'];
  let firstAlpha = UserInputValue.slice(0,1).toUpperCase();
  let baqiAlpha = UserInputValue.slice(1).toLowerCase();
  let finalWordCity = firstAlpha + baqiAlpha;

  if (!pakistanCities.includes(finalWordCity)) {
    alert("Enter a Correct City Name");
  }else{

  let date = new Date().toISOString().slice(0, 10);

  const API = `https://api.aladhan.com/v1/timingsByCity/${date}?city=${finalWordCity}&country=Pakistan`;
  

  // Make API request
  fetch(API)
  .then(response => response.json())
  .then(data => {
   console.log(data.code);

    if (data.code === 200) {
      
      // Store prayer times data
      finalWordCity = data;
      namaztime.innerHTML =  `${UserInputValue} Namaz Timings`;
      fajrNamaz_print.innerHTML = `Fajr: ${finalWordCity.data.timings.Fajr} AM`;
      zohrNamaz_print.innerHTML = `Zohr: ${finalWordCity.data.timings.Dhuhr} PM`;
      asarNamaz_print.innerHTML = `Asr: ${finalWordCity.data.timings.Asr} PM`;
      magribNamaz_print.innerHTML = `Maghrib: ${finalWordCity.data.timings.Maghrib} PM`;
      eshaNamaz_print.innerHTML = `Isha: ${finalWordCity.data.timings.Isha} PM`;
      
    }
   
  })
  .catch(error => console.error('Error fetching prayer times:', error));
}
});
