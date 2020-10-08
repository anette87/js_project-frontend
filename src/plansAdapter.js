class PlansAdapter{
    constructor(){
        this.baseUrl = "https://trip-itinerary-backend.herokuapp.com/plans"
    }

    sendPostRequest(plan){
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({day_id: plan.day_id, location: plan.location, description: plan.description})
        };
        return fetch(this.baseUrl, configObj)
        .then(resp => resp.json())
        .then(createdPlan => { 
            if (createdPlan.data){
                let newPlan = new Plan(createdPlan.data.attributes);
                newPlan.display()
            } else {
                let msg = ''
                for (const attribute in createdPlan) {
                msg += `${attribute}: ${createdPlan[attribute].join(', ')}\n`
            }
                alert(`Error: ${msg}`)
            }
        });
    }

    sendDeleteRequest(plan){
        let configObj = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            };
        return fetch(`${this.baseUrl}/${plan.id}`, configObj)
        .then(resp => resp.json())
    }

    sendPatchRequest(plan){
        let configObj = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({day_id: plan.day_id, location: plan.location, description: plan.description})
            };
        return fetch(`${this.baseUrl}/${plan.id}`, configObj)
        .then(resp => resp.json())
        .then(updatedPlan => {
            plan.updateDisplay()
        });
    }
}