// Write your helper functions here!

require('cross-fetch/polyfill');

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
    
    let pilotStatus = document.getElementById("pilotStatus").innerHTML;
    let copilotStatus = document.getElementById("copilotStatus").innerHTML;
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty") {
        alert("All fields required!")}
    else if (validateInput(pilot.value) === "Is a number" || validateInput(copilot.value) === "Is a number") {
        alert("Please enter a valid name for pilot and copilot!")}
    else if (validateInput(fuelLevel.value) === "Not a number" || validateInput(cargoLevel.value) === "Not a number") {
        alert("Please enter numbers for fuel level and cargo mass!")}
    else {
    if (fuelLevel.value < 10000) {
        console.log(pilot.value);
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
        list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = 'red';
        if (cargoLevel.value > 10000) {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        } 
    } else if (cargoLevel.value > 10000) {
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
        list.style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = 'red';
        
        
    } else {
        document.getElementById("pilotStatus").textContent = `Pilot ${pilot.value} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
        list.style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = 'green';
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        
    } 
   } 
 }
 
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