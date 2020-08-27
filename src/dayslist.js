function daysList(days){
    let container = document.getElementById("appCountainer")
    container.innerHTML = ""
    
    for (const day of days){
        let card = document.createElement("div");
        card.setAttribute('class','card');
        card.setAttribute('data-id',`${day.id}`);
        let hello = document.createElement("h2")
        hello.innerHTML = `<h2>Day ${day.date}</h2>`
        card.appendChild(hello);
        container.appendChild(card);   
        let addPlans = document.createElement("button")
        addPlans.textContent = "Add Plans"
        card.appendChild(addPlans)
        addPlans.addEventListener('click', (event) => {
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
                p.innerHTML = `${document.getElementById("location").value}<br>${document.getElementById("description").value}`

                return fetch(PLANS_URL, configObj)
                .then(resp => resp.json())
                .then(plan => {
                    console.log(plan)
                    let edit = document.createElement("button")
                    edit.innerText = "Edit"
                    p.appendChild(edit)
                    edit.addEventListener('click', (event) => {
                        p.innerHTML = `<input type="text" id="location" value="${plan.data.attributes.location}"><br><input type="text" id="description" value="${plan.data.attributes.description}">`
                        let save = document.createElement("button")
                        save.innerText = "Save"
                        p.appendChild(save)
                        save.addEventListener('click', (event) => {
                            let configObj = {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json",
                                "Accept": "application/json"
                            },
                            body: JSON.stringify({day_id:`${day.id}`, location: document.getElementById("location").value, description: document.getElementById("description").value})
                            };
                            return fetch(`http://localhost:3000/plans/${plan.data.id}`, configObj)
                            .then(resp => resp.json())
                            .then(plan => {
                                console.log(plan)
                                p.innerHTML = `${plan.data.attributes.location}<br>${plan.data.attributes.description}`
                            });
                        });
                    });
                })
            });
        })
    }
}