function clock() {

    console.log("Clock is clicked")
    var hour = document.getElementById("hours");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("secs");
    var am = document.getElementById("am-pm");

    var time = new Date();
    var a = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    var b = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    var c = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    var d = time.getHours() >= 12 ? "PM" : "AM";


    hour.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;
    am.innerHTML = d;
}
console.log("Java Script");

setInterval(clock, 1000);

function setTime() {

    var i = document.getElementById("wakeUpTimeSelector").value;

    var hourr = new Date().getHours();

    if (i == hourr) {

        document.getElementById('img-container').style.backgroundImage = "url(assets/wakeup-image.png)";
        document.getElementById('text-container').innerHTML = " WAKE UP!!";
        document.getElementById('greetings').innerHTML = "Good Morning !!";
    }
    var j = document.getElementById("lunchTimeSelector").value;
    var hourr = new Date().getHours();

    if (j == hourr) {

        document.getElementById('img-container').style.backgroundImage = "url(assets/lunch_image.png)";
        document.getElementById('text-container').innerHTML = "Lets have some lunch!!";
        document.getElementById('greetings').innerHTML = "Good Afternoon !!";
    }
    var k = document.getElementById("napTimeSelector").value;
    var hourr = new Date().getHours();
    if (k == hourr) {
        document.getElementById('img-container').style.backgroundImage = "url(assets/goodnight_image.png) ";
        document.getElementById('text-container').innerHTML = "Good Night!!";
        document.getElementById('greetings').innerHTML = "Good Night !!";
    }





}