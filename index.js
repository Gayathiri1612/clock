function updateClock(){
    var date=new Date();
    var hours=date.getHours().toString().padStart(2,'0');
    var mins=date.getMinutes().toString().padStart(2,'0');
    var secs=date.getSeconds().toString().padStart(2,'0');
    document.getElementById('clock').innerHTML=hours+":"+mins+":"+secs;
    
}

window.setInterval(updateClock,1000);
updateClock();
var card=document.getElementById('card');
var message=document.getElementById('message');

card.addEventListener('mouseover',function(){
    playsound();
    card.style.backgroundColor="rgb(204, 122, 22)";
    message.innerHTML="You are IN";

});

card.addEventListener('mouseout',function(){
    playsound();
    card.style.backgroundColor=" aquamarine";
    message.innerHTML="You are OUT";

});

card.addEventListener('click',function(){
    playsound();
    card.style.backgroundColor="brown";
    message.innerHTML="You Clicked";
});

let clickSound=new Audio("alarm1.mp3");
 function playsound(){
     clickSound.currentTime=0;
     clickSound.play();
 }