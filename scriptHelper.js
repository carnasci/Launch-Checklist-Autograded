// Write your helper functions here!

//require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    
    let missionTarget = document.getElementById("missionTarget");
       missionTarget.innerHTML =
               `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}"/>
                `
    
 }
 
 function validateInput(testInput) {
    
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput) === true) {
        return "Not a Number";
    } else if (isNaN(testInput) === false) {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
        console.log(pilot);
        alert("All fields required!")}
    // if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number") {
    //     alert("Please enter a valid name for pilot and copilot!")}
    if (validateInput(fuelLevel) == "Not a Number" || validateInput(cargoLevel) == "Not a Number") {
        alert("Please enter numbers for fuel level and cargo mass!")}
    
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel >= 10000 && cargoLevel < 10000) {
        
        //list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = 'green';
        //fuelStatus.innerHTML = "Fuel level high enough for launch";
        // cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }
    
    if (fuelLevel < 10000) {
        console.log(pilot);
        
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';
    } else {fuelStatus.innerHTML = "Fuel level high enough for launch";}
        
    if (cargoLevel > 10000) {
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            list.style.visibility = "visible";
        
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';
        } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        } 
        } 
    
//     if (cargoLevel > 10000 && fuelLevel > 10000) {
//         pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
//         copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
//         list.style.visibility = "visible";
//         cargoStatus.innerHTML = "Cargo mass too heavy for launch";
//         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
//         launchStatus.style.color = 'red';
//         fuelStatus.innerHTML = "Fuel level high enough for launch";
//     }
//  }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let index = Math.round(Math.random()*planets.length);
    let randomPlanet = planets[index];
    return randomPlanet;
     }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;