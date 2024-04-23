let form = document.querySelector("#prayerTimes");
let user_inp = document.querySelector("#cityname");
let fajrNamaz_print = document.querySelector("#fajr");
let zohrNamaz_print = document.querySelector("#zohr");
let asarNamaz_print = document.querySelector("#asar");
let magribNamaz_print = document.querySelector("#magrib");
let eshaNamaz_print = document.querySelector("#esha");
let country = "Pakistan";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let UserInputValue = user_inp.value;
  // Make API request
  fetch(`https://api.aladhan.com/v1/timingsByCity/20-04-2024?city=${user_inp}&country=${country}n&method=8`)
  .then(response => response.json())
  .then(data => {
    // Store prayer times data
    UserInputValue = data;

    fajrNamaz_print.innerHTML = UserInputValue.data.timings.Fajr + " " + "AM";
    zohrNamaz_print.innerHTML = UserInputValue.data.timings.Dhuhr + " " + "PM";
    asarNamaz_print.innerHTML = UserInputValue.data.timings.Asr + " " + "PM";
    magribNamaz_print.innerHTML = UserInputValue.data.timings.Maghrib + " " + "PM";
    eshaNamaz_print.innerHTML = UserInputValue.data.timings.Isha + " " + "PM";
    
   
  })
  .catch(error => console.error('Error fetching prayer times:', error));
  
});


// function fetchPrayerTimes(){
//     //const apikey = fetch("https://api.aladhan.com/v1/timingsByCity/20-04-2024?city=karachi&country=%27%27&method=8");

//     fetch("https://api.aladhan.com/v1/timingsByCity/20-04-2024?city=karachi&country=%27%27&method=8")
//     .then((response) => response.json())
//     .then((data) => {

//       // Store prayer times data
//       UserInputValue = data;

//       // Call function to update UI with prayer times
//       updatePrayerTimesUI();
//     })
//     .catch((error) => console.error("Error fetching prayer times:", error));

// }

// // Update UI with prayer times
// function updatePrayerTimesUI() {
//     // Access prayer times data and update HTML elements
//     fajr_Namaztime_print.innerText = UserInputValue.fajr;
//     zohr_Namaztime_print.innerText = UserInputValue.zohar;
//     asar_Namaztime_print.innerText = UserInputValue.asar;
//     magrib_Namaztime_print.innerText = UserInputValue.magrib;
//     esha_Namaztime_print.innerText = UserInputValue.esha;
// }
//   // Call fetchPrayerTimes() when the page loads
//   window.onload = fetchPrayerTimes;
