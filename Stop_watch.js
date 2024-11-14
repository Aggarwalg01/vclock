const dark = document.getElementById("darkmode")
const navbar= document.getElementById("navbar")
const container= document.getElementById("container")
const time=document.querySelector(".time")

window.onload = function(){
    dark.click();
};

dark.addEventListener('click',function(){
    this.classList.toggle('bi-moon-fill');
    navbar.classList.toggle("dark-theme");
    container.classList.toggle("dark-theme");
    time.classList.toggle("dark-theme");
    document.querySelector("body").classList.toggle("dark-theme");
})

var timer=false;
var hr=0;
var min=0;
var sec=0;
var count=0;

function start(){
    timer=true;
    stopwatch();
}
function stop(){
    timer=false;
}
function stopwatch(){
    if(timer==true){
        count+=1;
        
        if (count==100){
            
            sec+=1;
            count=0;
        }
        if (sec==60){
            
            min+=1;
            sec=0;
        }
        if (min==60){
            hr+=1;
            min=0;
        }
        document.getElementById("count").innerHTML=":"+count;
        document.getElementById("sec").innerHTML=":"+sec;
        document.getElementById("min").innerHTML=":"+min;
        document.getElementById("hr").innerHTML=hr;
        if(count<10){
            document.getElementById("count").innerHTML=":0"+count;
        }
        if(sec<10){
            document.getElementById("sec").innerHTML=":0"+sec;
        }
        if(min<10){
            document.getElementById("min").innerHTML=":0"+min;
        }
        if(hr<10){
            document.getElementById("hr").innerHTML="0"+hr;
        }
        setTimeout("stopwatch()",10);
        
    }
}