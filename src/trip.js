class Trip{

    static all = [] //all the trips created

    constructor({client_name, email, location, starting_day, last_day, id, days}){
        this.client_name = client_name
        this.email = email 
        this.location = location
        this.starting_day = starting_day
        this.last_day = last_day
        this.id = id
        this.days = days.map( day => new Day(day.data.attributes));

        Trip.all.push(this)
    }

    displayTrip(){
        container.innerHTML = ""
        let greetings = document.createElement("h2")
        greetings.setAttribute('class','white-text text-center')
        greetings.innerHTML = `Hi ${this.client_name}! Let's create your trip to ${this.location}!`
        container.appendChild(greetings)
        let row = document.createElement("div")
        row.setAttribute("id", "days-row")
        row.setAttribute("class", "row")
        container.appendChild(row)
        let printable = document.createElement("button")
        printable.setAttribute('class','btn btn-success btn-block btn-rounded z-depth-1 mt-5 mb-5')
        printable.innerText = "Print Itinerary"
        container.appendChild(printable)
        printable.addEventListener("click", (event) => {
            window.print();
        })
        this.days.forEach(day => {
            day.displayDays()            
        });
    }
}

