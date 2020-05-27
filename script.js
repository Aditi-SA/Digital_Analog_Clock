const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


//Get current date and time
var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + "Minute: " + min + " Seconds: " + sec);

//convert time to correct degree to show on clock
let hrPosition = (hr*360/12) + (min*(360/60)/12);
//let minPosition = min*360/60;    //min position
let minPosition = (min*360/60) + (sec*(360/60)/60);   //moves with sec hand
let secPosition = sec*360/60;


//apply random degrees to clock as degrees in inline

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"





