class Day{

    static all = [] //all the days created

    constructor({trip_id, date, id, plans}){
        this.trip_id = trip_id
        this.date = date
        this.id = id
        this.plans = plans.map(plan => new Plan(plan.data.attributes))
        Day.all.push(this)
    }

    card() {
        let card = document.querySelector(`[data-day-id='${this.day_id}']`)
        return card;
    }

    displayDays(){
        let row = document.getElementById("days-row");
        let card = document.createElement("div");
        card.setAttribute('class','card-background col-12 col-md-4');
        card.setAttribute('data-day-id',`${this.id}`);
        let h2 = document.createElement("h2")
        h2.setAttribute("class","white-text text-center mb-5")
        h2.innerHTML = `Day ${this.date}`
        card.appendChild(h2);
        row.appendChild(card);   
        let addPlans = document.createElement("button")
        addPlans.setAttribute("class", "new-plan btn btn-success btn-block btn-rounded z-depth-1 mb-5 mt-5")
        addPlans.textContent = "Add Plans"
        
        this.plans.forEach(plan => {
            if (plan.location == 'Arecibo'){
                let findByLocation = document.createElement("button")
                findByLocation.textContent = "Just Arecibo"
                findByLocation.addEventListener('click', (event) => {
                    this.displayArecibo();
                })
                card.appendChild(findByLocation)
            }
        })
        card.appendChild(addPlans)
        addPlans.addEventListener('click', (event) => {
            let blankPlan = new Plan({day_id: this.id})
            blankPlan.displayNewForm(addPlans)
        });
        this.displayExistingPlans()
    }

    displayExistingPlans() {
        this.plans.forEach(plan => {
            plan.display()
        });
    }
    
    displayArecibo(){
        let areciboPlans = this.plans.filter(plan => plan.location === "Arecibo")
        this.plans.forEach(plan => {
            document.querySelector(`[data-plan-id='${plan.id}']`).remove();
        })        
        areciboPlans.forEach(plan => {
            plan.display()
        })
        
    }
}