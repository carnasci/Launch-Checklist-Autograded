// Write your JavaScript code here!




window.addEventListener("load", function() {
    
    
            
        
    

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        //console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const planet = pickPlanet(listedPlanets);
        console.log(planet);

        const name = planet.name;
        const diameter = planet.diameter;
        const star = planet.star;
        const distance = planet.distance;
        const moons = planet.moons;
        const imageUrl = planet.image;
        
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);

    })

    document.addEventListener("submit", function(event) {
        event.preventDefault();

    
    const list = document.getElementById("faultyItems");
    const pilot = document.querySelector("input[name=pilotName]").value;
    const copilot = document.querySelector("input[name=copilotName]").value;
    const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    const cargoLevel = document.querySelector("input[name=cargoMass]").value;
    
    
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    
    });
    
 });