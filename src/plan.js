class Plan{

    static all = [] //all the trips created

    constructor({day_id, location, description, id}){
        this.day_id = day_id
        this.location = location
        this.description = description
        this.id = id
    
        Plan.all.push(this)
    }

    dayCard() {
        let card = document.querySelector(`[data-day-id='${this.day_id}']`)
        return card;
    }

    resetPlanForm(){
        let dayCard = this.dayCard();
        let form = dayCard.querySelector("form.new-plan");
        form.remove()
        let button = dayCard.querySelector("button.new-plan")
        button.style.display = "inline-block";
    }

    addInputs(button) {
        let card = this.dayCard();
        let form = document.createElement("form")
        form.setAttribute("class", "new-plan")
        form.innerHTML= 
            `<input type='text' class="plan-location" placeholder="Location"></input><br>
             <input type='text' class="plan-description" placeholder="Description"></input><br>
             <input type='submit' value='Submit'>`
        card.appendChild(form)
        button.style.display = "none";
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.location = form.querySelector("input.plan-location").value
            this.description = form.querySelector("input.plan-description").value
            this.create()
        });
    }

    create() {
        let adapter = new PlansAdapter()
        adapter.sendPostRequest(this)
        this.resetPlanForm()
    }

    delete() {
        let dayCard = this.dayCard();
        let adapter = new PlansAdapter()
        adapter.sendDeleteRequest(this)
        let planContainer = dayCard.querySelector(`[data-plan-id='${this.id}']`);
        planContainer.remove();
    }

    display() {
        let card = this.dayCard();
        let planContainer = document.createElement("div");
        planContainer.setAttribute("data-plan-id", this.id)
        planContainer.innerHTML = `<p>${this.location}</p><p>${this.description}</p>`
        
        let editButton = document.createElement("button")
        editButton.innerText = "Edit"
        planContainer.appendChild(editButton)
        this.listenForEditClick(editButton)
        
        let deleteButton = document.createElement("button")
        deleteButton.innerText = "Delete"
        planContainer.appendChild(deleteButton)
        this.listenForDeleteClick(deleteButton)

        card.appendChild(planContainer);
    }

    listenForEditClick(element){
        element.addEventListener("click", (event) => {
            event.preventDefault();
            
        })
    }

    listenForDeleteClick(element){
        element.addEventListener("click", (event) => {
            event.preventDefault();
            this.delete();
        })
    }

}