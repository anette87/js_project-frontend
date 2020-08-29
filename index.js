const BASE_URL = "http://localhost:3000"
const TRIPS_URL = `${BASE_URL}/trips`
const PLANS_URL = `${BASE_URL}/plans`
let container = document.getElementById("appCountainer")

document.addEventListener('DOMContentLoaded', (event) => {
    let tripForm = document.getElementById("trip-form")
        
    tripForm.addEventListener("submit",(event) => {
        event.preventDefault();
        let TripAdapter = new TripsAdapter();
        TripAdapter.sendPostRequest();
    });
});