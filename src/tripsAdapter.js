class TripsAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/trips"
    }

    sendPostRequest(){
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({client_name: event.target.elements["trip-client_name"].value, location: event.target.elements["trip-location"].value, starting_day: event.target.elements["trip-starting_day"].value, last_day: event.target.elements["trip-last_day"].value})
        };
        return fetch(this.baseUrl, configObj)
        .then(resp => resp.json())
        .then(trip => { 
            let newTrip = new Trip(trip.data.attributes);
            newTrip.displayTrip()

            // newTrip.plansByDayCards(trip.data.attributes.days)      
    });
}

    

    // sendPatchRequest(itemId){
    //     const price = document.getElementById(`update-price-${itemId}`).value
    //     const description = document.getElementById(`update-description-${itemId}`).value
    //     const name = document.getElementById(`update-name-${itemId}`).value

    //     let itemObj = {
    //         name,
    //         description,
    //         price
    //     }

    //     let configObj = {
    //         method: 'PATCH',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accepts": "application/json"
    //         },
    //         body: JSON.stringify(itemObj)
    //     }

    //     fetch(this.baseUrl + `/${itemId}`, configObj)
    //     .then(res => res.json())
    //     .then(response => {
    //         let item = Item.all.find((i) => i.id === response.data.attributes.id )
    //         item.updateItemOnDom(response.data.attributes)
            
    //     })
    //     // remove form

    //     let form = document.getElementById(`update-form-${itemId}`)
    //     form.remove()
    // }
}