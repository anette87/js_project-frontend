class TripsAdapter{
    constructor(){
        this.baseUrl = "https://trip-itinerary-backend.herokuapp.com/trips"
    }

    sendPostRequest(){
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({client_name: event.target.elements["trip-client_name"].value, location: event.target.elements["trip-location"].value, starting_day: event.target.elements["trip-starting_day"].value, last_day: event.target.elements["trip-last_day"].value, email: event.target.elements["trip-email"].value})
        };
        return fetch(this.baseUrl, configObj)
        .then(resp => resp.json())
        .then(trip => { 
            if (trip.data) {
                let newTrip = new Trip(trip.data.attributes);
                newTrip.displayTrip()
            } else {
                let msg = ''
                for (const attribute in trip) {
                    msg += `${attribute}: ${trip[attribute].join(', ')}\n`
                }
                alert(`Error: ${msg}`)
            }
        });
    }

    findByEmail(){
        fetch(this.baseUrl)
        .then(response => response.json())
        .then(trips => {
            let trip = trips.data.find(trip => trip.attributes.email === `${document.getElementById("find-email").value}`)
            if (trip) {
                let newTrip = new Trip(trip.attributes);
                newTrip.displayTrip()
            } else {
                alert("No trip found. Please try again.")
            }
        });
    }
}