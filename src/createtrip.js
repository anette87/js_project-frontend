function createTrip(){
        // let createTrip = document.getElementById("appCountainer")
        // let h2 = document.createElement("h2")
        // h2.innerHTML = "Create your Trip"
        // createTrip.appendChild(h2)

        // let form = document.createElement("form");
        // let p1 = document.createElement("p")
        // p1.innerHTML= `Your Name: <input type='text' id="client_name">`
        // form.appendChild(p1)
        // let p2 = document.createElement("p")
        // p2.innerHTML= `Location: <input type='text' id="location">`
        // form.appendChild(p2)
        // let p3 = document.createElement("p")
        // p3.innerHTML= `From: <input type='date' id="starting_day" placeholder="MM/DD/YYYY">`
        // form.appendChild(p3)
        // let p4 = document.createElement("p")
        // p4.innerHTML= `To: <input type='date' id="last_day" placeholder="MM/DD/YYYY">`
        // form.appendChild(p4)
        // let startButton = document.createElement("input")
        // startButton.setAttribute("type", "submit");
        // startButton.setAttribute("value", "START");
        // form.appendChild(startButton)

        // createTrip.appendChild(form);

        let tripForm = document.getElementById("trip-form")
        
        tripForm.addEventListener("submit",(event) => {
            event.preventDefault();
            let configObj = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({client_name: event.target.elements["client_name"].value, location: event.target.elements["location"].value, starting_day: event.target.elements["starting_day"].value, last_day: event.target.elements["last_day"].value})
            };
            return fetch(TRIPS_URL, configObj)
            .then(resp => resp.json())
            .then(trip => { 
                daysList(trip.data.attributes.days)       
            });
        });
}
            

