var request = new XMLHttpRequest();

function garageCheck() {
    console.log("Checking...");
    request.open("GET", "status.json", false);
    request.send(null);
    let status = JSON.parse(request.responseText);
    image = document.getElementById('garage');
    if (status.garageStatus == "open") {
        image.src = "garageopened.png";
        image.alt = "garage is open";
    }
    
    if (status.garageStatus == "closed") {
        image.src = "garageclosed.png";
        image.alt = "garage is closed";
    }
}

setInterval(garageCheck, 1000)