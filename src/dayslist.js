function daysList(card, day, addPlans, container){
    // let container = document.getElementById("appCountainer")
    // container.innerHTML = ""

    // for (const day of days){
    //     let card = document.createElement("div");
    //     card.setAttribute('class','card');
    //     card.setAttribute('data-id',`${day.id}`);
    //     let h2 = document.createElement("h2")
    //     h2.innerHTML = `<h2>Day ${day.date}</h2>`
    //     card.appendChild(h2);
    //     container.appendChild(card);   
    //     let addPlans = document.createElement("button")
    //     addPlans.textContent = "Add Plans"
    //     card.appendChild(addPlans)
    //     addPlans.addEventListener('click', (event) => {
            let p = document.createElement("p")
            p.innerHTML= `<input type='text' id="location" placeholder="Location"></input><br><input type='textarea' id="description" placeholder="Description"></input>`
            let submit = document.createElement("button")
            submit.innerText = "Submit"
            p.appendChild(submit)
            card.appendChild(p)
            addPlans.style.display = "none";
            submit.addEventListener('click', (event) => {
                addPlans.style.display = "inline-block";
                let configObj = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({day_id:`${day.id}`, location: document.getElementById("location").value, description: document.getElementById("description").value})
                };
                return fetch(PLANS_URL, configObj)
                .then(resp => resp.json())
                .then(plan => {
                    displayPlan(p, day, plan.data)

                
                });
            });
                   
    
        
    
    let createButton = document.createElement("button")
    createButton.innerText = "View Printable Itinarary"
    container.appendChild(createButton)
    createButton.addEventListener('click', (event) => {
        let cards = document.getElementsByClassName("card")
        // let container = document.getElementById("appCountainer")
        // debugger
        // container.innerHTML = ""
        for (const aCard of cards){
            let h2 = document.createElement("h2")
            h2.innerHTML = `${aCard.querySelector("h2").innerText}`
            aCard.appendChild(h2);
            container.appendChild(aCard); 
        }
    
    
    });
}


// document.getElementsByClassName("card")[0].querySelector("h2").innerText