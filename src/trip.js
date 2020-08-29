class Trip{

    static all = [] //all the trips created

    constructor({client_name, location, starting_day, last_day, id, days}){
        this.client_name = client_name
        this.location = location
        this.starting_day = starting_day
        this.last_day = last_day
        this.id = id
        this.days = days.map( day => new Day(day));



        Trip.all.push(this)
    }

    displayTrip(){
        container.innerHTML = ""
        let greetings = document.createElement("h2")
        greetings.innerHTML = `Hi ${this.client_name}! Let's create your trip to ${this.location}!`
        container.appendChild(greetings)

        this.days.forEach(day => {
            day.displayDays()            
        });


    }

}

