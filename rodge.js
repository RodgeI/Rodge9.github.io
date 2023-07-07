var counter = 1;
        setInterval(function(){
            document.getElementById('radio' + counter).checked = true;
            counter++;
          if(counter > 5){
              counter = 1;
          }        
        }, 3000);
        function toggle(){
            var blur = document.getElementById('blur');
            blur.classList.toggle('active');
            var popup = document.getElementById('popup');
            popup.classList.toggle('active');
            }
  function toggles(){
            var blur = document.getElementById('blur');
            blur.classList.toggle('active');         
var popup1=document.getElementById('popup1');
popup1.classList.toggle('active1');  
}
function toggler(){
            var blur = document.getElementById('blur');
            blur.classList.toggle('active');         
var popup2 = document.getElementById('popup2');
popup2.classList.toggle('active2');  
}
function toggleq(){
            var blur = document.getElementById('blur');
            blur.classList.toggle('active');         
var popup3 = document.getElementById('popup3');
popup3.classList.toggle('active3');  
}
function togglet(){
            var blur = document.getElementById('blur');
            blur.classList.toggle('active');         
var popup0 = document.getElementById('popup0');
popup0.classList.toggle('active0');  
}