var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min1");
var secHeading = document.getElementById("sec1");
var msecHeading = document.getElementById("msec1");
var interval;

function Timer(){
msec++
msecHeading.innerHTML = msec;

if(msec >=100)
{
sec++
secHeading.innerHTML = sec;
msec = 0;
}
else if(sec >=60)
{
min++
minHeading.innerHTML = min;
sec = 0;
}

}

function start(){
interval = setInterval(Timer,10)
}

function stop(){
    clearInterval(interval)
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop();
}
