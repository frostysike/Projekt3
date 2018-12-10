 // her starter NANNA's jscript til headeren //

 window.onscroll = function() {headerScroll()};

function headerScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("headerList").classList.add("headerListSmall");
        document.getElementById("headerItem1").classList.add("headerItemSmall");
        document.getElementById("headerItem2").classList.add("headerItemSmall");
        document.getElementById("headerItem3").classList.add("headerItemSmall");
        document.getElementById("headerItem4").classList.add("headerItemSmall");

        document.getElementById("headerVideoText").style.transitionDelay="0s";
        document.getElementById("headerBilledeText").style.transitionDelay="0s";
        document.getElementById("headerForumText").style.transitionDelay="0s";
        document.getElementById("headerProgramText").style.transitionDelay="0s";

    } else {
      document.getElementById("headerList").classList.remove("headerListSmall");
      document.getElementById("headerItem1").classList.remove("headerItemSmall");
      document.getElementById("headerItem2").classList.remove("headerItemSmall");
      document.getElementById("headerItem3").classList.remove("headerItemSmall");
      document.getElementById("headerItem4").classList.remove("headerItemSmall");

      document.getElementById("headerVideoText").style.transitionDelay="0.4s";
      document.getElementById("headerBilledeText").style.transitionDelay="0.4s";
      document.getElementById("headerForumText").style.transitionDelay="0.4s";
      document.getElementById("headerProgramText").style.transitionDelay="0.4s";
    }
}

function slide(event){
    event.target.previousElementSibling.style.clip = "rect(0px, "+(event.clientX-event.target.offsetLeft)+"px, 427px, 0px)";
}



var countDownDate = new Date("April 5, 2019 00:00:00").getTime();

var x = setInterval(function() {


var now = new Date().getTime();
var distance = count - now;

var days = Math.floor(distance/(1000*60*60*24));
var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
var seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("min").innerHTML = minutes;
document.getElementById("sekunder").innerHTML = seconds;


if(distance <= 0) {
  clearInterval(x);
}
},1000);
