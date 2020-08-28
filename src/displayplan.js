function displayPlan(element, day, plan) {
    element.innerHTML = `<p id="planslocation">${plan.attributes.location}</p><p id="plansdescription">${plan.attributes.description}</p>`
    let edit = document.createElement("button")
    edit.innerText = "Edit"
    element.appendChild(edit)
    let deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    element.appendChild(deleteButton)
    edit.addEventListener('click', (event) => {
        element.innerHTML = `<input type="text" id="location" value="${plan.attributes.location}"><br><input type="text" id="description" value="${plan.attributes.description}">`
        let save = document.createElement("button")
        save.innerText = "Save"
        element.appendChild(save)
        save.addEventListener('click', (event) => {
            let configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({day_id:`${day.id}`, location: document.getElementById("location").value, description: document.getElementById("description").value})
            };
            return fetch(`http://localhost:3000/plans/${plan.id}`, configObj)
            .then(resp => resp.json())
            .then(plan => {
                displayPlan(element, day, plan.data)
            });
        
        });
    });
    deleteButton.addEventListener('click', (event) => {
        alert("This plan would be deleted")
        element.remove();
        let configObj = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
        };
        return fetch(`http://localhost:3000/plans/${plan.id}`, configObj)
        .then(resp => resp.json())
        // .then(plan => {});
    });
}