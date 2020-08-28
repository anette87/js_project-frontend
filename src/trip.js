class Trip{

    static all = [] //all the trips created

    constructor({client_name, location, starting_day, last_day, id}){
        this.client_name = client_name
        this.location = location
        this.starting_day = starting_day
        this.last_day = last_day
        this.id = id

        

        Trip.all.push(this)
    }

    attachToDom(){
        this.tripList.append(this.fullRender())
    }
}