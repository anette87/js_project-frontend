class TripsAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/trips"
    }

    fetchTrips(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(json => {
            json.data.forEach((element)=>{
                let trip = new Trip(element.attributes)
                trip.attachToDom()
            })
            
        })
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