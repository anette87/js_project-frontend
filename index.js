const BASE_URL = "http://localhost:3000"
const TRIPS_URL = `${BASE_URL}/trips`
const PLANS_URL = `${BASE_URL}/plans`

document.addEventListener('DOMContentLoaded', (event) => {
    createTrip()
});



// document.addEventListener('DOMContentLoaded', (event) => {
//     let days = document.getElementById("appCountainer")
//     let hello = document.createElement("h2")
//     hello.innerHTML = "<h2>Day 1</h2>"
//     days.appendChild(hello)
    
//     let addPlans = document.createElement("button")
//     addPlans.textContent = "Add Plans"
//     addPlans.addEventListener('click', (event) => {
//         if (addPlans.innerText === "Add Plans"){
//         addPlans.textContent = "Save"
//         let p = document.createElement("p")
//         p.innerHTML= `<input type='text' id="location" placeholder="Location"></input><br><input type='textarea' placeholder="Description"></input>`
//         days.appendChild(p)
//         }else{
//             addPlans.textContent = "Add Plans"
//             let location = document.getElementById("location").value

//         }
//       });
//     days.appendChild(addPlans)

// });

// // if(editButton.innerText === "Save") {
// //     editButton.innerText = "Edit"
// //     //grab value of inpt field
// //     let newToyName = document.getElementById(`edit-${toy.id}`).value
// //     // make patch request to update toy 
// //     //remove input field 

// //     h2.innerHTML = newToyName
// //   } else {
// //     editButton.innerText = "Save"
// //     h2.innerHTML= `<input type='text' id='edit-${toy.id}' value='${h2.innerText}' ></input>`
// //     //replace the tpys name with input field 
// //   }
// // })