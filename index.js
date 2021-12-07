function clock() {
    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var am_pm =document.getElementById("am-img"); 

    var time = new Date();
    var hour = time.getHours();
    var ampm = hour >= 12 ? "PM" : "AM";
    var minute = time.getMinutes();
    var second = time.getSeconds();
    
    am_pm.innerHTML = ampm;
    hour = hour%12;
    hour = hour ? hour:12;
    if(hour<10){
        hour = "0"+hour;
    }
    hours.innerHTML = hour;
    if(minute<10){
        minute = "0"+minute;
    }
    minutes.innerHTML = minute;
    if(second<10){
        second = "0" + second;
    }
    seconds.innerHTML = second;
    
}

setInterval(clock,1000);



function Makediv(){
   var container=document.createElement('div');
   container.className="body";
   container.id="dynamic-block";
   
   document.getElementById('grid-container1').appendChild(container);
   
   var invalue=document.getElementById("default");
   var invalue1=document.getElementById("default1");
   var invalue2=document.getElementById("default2");
   var value=invalue.options[invalue.selectedIndex].text;
   document.getElementById("dynamic-block").innerHTML="Wake up time "+ value+"<br/> Lunch Time "+ invalue1.options[invalue1.selectedIndex].text+" <br/>Nap Time "+ invalue2.options[invalue2.selectedIndex].text;
                                           
   
   
}





function settime(){
    
   var i=document.getElementById('default').value;
   var hourr=new Date().getHours();

    if(i== hourr){
    document.getElementById('baloon').style.backgroundImage="url(image2.jpeg)";
    }

    var i=document.getElementById('default1').value;
   var hourr=new Date().getHours();

    if(i== hourr){
    document.getElementById('baloon').style.backgroundImage="url(image1.jpeg)";
    }

    var i=document.getElementById('default2').value;
   var hourr=new Date().getHours();

    if(i== hourr){
    document.getElementById('baloon').style.backgroundImage="url(image3.jpeg)";
    }

    

    Makediv();
    
  
  
 
}


