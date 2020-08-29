class PlansAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/plans"
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
            let newPlan = new Plan(createdPlan.data.attributes);
            newPlan.display()
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
}