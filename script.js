//this is where the script will go
setInterval(showTime, 1000);

function showTime(){

    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let sec = time.getSeconds();
    amorpm = "am";

    if(hours >= 12){
        amorpm = "pm";
    }else{
        amorpm = "am";
    }

   hours = hours < 10 ? "0" + hours : hours;
   minutes = minutes < 10 ? "0" + minutes : minutes;
   sec = sec < 10 ? "0" + sec : sec;

   let currentTime = hours + ":" + minutes + ":" + sec + " " + amorpm;

    document.getElementId("clock2").innerHTML = currentTime;

}

showTime();




/*function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('state');

    if(hrs >= 12){
        hrs = hrs - 12;
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('state').innerHTML = session;
}
setInterval(displayTime, 10);

function displayDayOrNight(){

    if(hrs > 12){
        let a = "PM";     
    }else{
        let a = "AM"
    }
    return a;
}*/