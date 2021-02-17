
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    window.addEventListener("batterystatus", onBatteryStatus, false);
}

function onBatteryStatus(status){
    alert("BATTERY STATUS: LEVEL" +status.level   +"isPlugged" +status.isPlugged );
}

document.getElementById("set").addEventListener("click", setLocalStorage);
document.getElementById("show").addEventListener("click", showLocalStorage)
document.addEventListener("volumeupbutton", callBackFunction, false);
document.addEventListener("backbutton", onBackPress, false );
let localStorage = window.localStorage;

function setLocalStorage(){
    localStorage.setItem("name", "OSCAR");
    localStorage.setItem("age", "26");
    
}

function showLocalStorage(){
    alert('${localStorage.show("name")}');

}
function callBackFunction(){
    alert("Volume Up Button Pressed")
}
function onBackPress(e){
    e.preventDefault();
    alert('Back button pressed');
}
