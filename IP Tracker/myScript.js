//define constants for results to be displayed
let address = document.getElementById("display-ip");
let locationDisplay = document.getElementById("display-location");
let timezone = document.getElementById("display-timezone");
let isp = document.getElementById("display-isp");

//API prefix and key for easy modification and reuse
let apiPrefix = "https://geo.ipify.org/api/v1?apiKey=";
let apiKey = "at_YYIEVuzDAx6HMNFJ8oW2q5JOngmCu";

//Input and button elements
const input_ip = document.getElementById("input_ip");
const search_ip = document.getElementById("search-ip");

//initiate lat and lng
let lat = 0;
let lng = 0;

//leaflet.js map creation
var myMap = L.map("my-map");
const mapDisplay = () => {
 //create marker icon
 var myIcon = L.icon({
  iconUrl:
   "./assets/icon-location.svg",
  iconSize: [40, 50],
  iconAnchor: [20, 25]
 });  
myMap.setView([lat, lng], 13);
 L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution:
   '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(myMap);
 //integrate created icon into marker
 L.marker([lat, lng], { icon: myIcon }).addTo(myMap);
};

//fucntion to be used later below
const displayInfo = (data) => {
 address.innerHTML = data.ip;
 locationDisplay.innerHTML = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
 timezone.innerHTML = data.location.timezone;
 isp.innerHTML = data.isp;
};

//function that takes parameter of input IP and fetches data
const fetchDisplayInfo = (address = "") => {
 fetch(`${apiPrefix}${apiKey}&ipAddress=${address}`)
  .then((results) => results.json())
  .then((data) => {
   lat = data.location.lat;
   lng = data.location.lng;
   displayInfo(data);
   mapDisplay();
  }).catch(error=>{
   alert("Invalid IP address. Unable to fetch details")
  })
};
//call funtion
fetchDisplayInfo();

//handle input and button click
search_ip.addEventListener("click", (e) => {
 e.preventDefault();
 if (input_ip.value != "" && input_ip.value != null) {
  fetchDisplayInfo(input_ip.value);
 }
else{
 alert("Please enter an IP address");}
});

    
