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
        let form = dayCard.querySelector("form.plan-form");
        form.remove()
        let button = dayCard.querySelector("button.new-plan")
        button.style.display = "inline-block";
    }

    displayNewForm(button) {
        let card = this.dayCard();
        let form = this.form()
        card.appendChild(form)
        button.style.display = "none";
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.location = form.querySelector("input.plan-location").value
            this.description = form.querySelector("input.plan-description").value
            this.create()
        });
    }

    form(location="", description="") {
        let form = document.createElement("form")
        form.setAttribute("class", "plan-form")
        form.innerHTML= 
            `<input type='text' value='${location}' class="plan-location" placeholder="Location"></input><br>
             <input type='text' value='${description}' class="plan-description" placeholder="Description"></input><br>
             <input type='submit' value='Submit'>`
        return form
    }

    displayEditForm() {
        let dayCard = this.dayCard()
        let planContainer = dayCard.querySelector(`[data-plan-id='${this.id}']`);
        let form = this.form(this.location, this.description)
        planContainer.innerHTML = ""
        planContainer.appendChild(form)
        this.listenForEditSubmit(form)
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

    edit(){
        let adapter = new PlansAdapter()
        adapter.sendPatchRequest(this)
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

    updateDisplay(){
        let dayCard = this.dayCard();
        let planContainer = dayCard.querySelector(`[data-plan-id='${this.id}']`);
        planContainer.innerHTML = `<p>${this.location}</p><p>${this.description}</p>`
        
        let editButton = document.createElement("button")
        editButton.innerText = "Edit"
        planContainer.appendChild(editButton)
        this.listenForEditClick(editButton)
        
        let deleteButton = document.createElement("button")
        deleteButton.innerText = "Delete"
        planContainer.appendChild(deleteButton)
        this.listenForDeleteClick(deleteButton)
    }

    listenForEditClick(element){
        element.addEventListener("click", (event) => {
            event.preventDefault();
            this.displayEditForm();
        })
    }

    listenForDeleteClick(element){
        element.addEventListener("click", (event) => {
            event.preventDefault();
            this.delete();
        })
    }

    listenForEditSubmit(form){
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            this.location = form.querySelector("input.plan-location").value
            this.description = form.querySelector("input.plan-description").value
            this.edit()
        })
    }

    

}