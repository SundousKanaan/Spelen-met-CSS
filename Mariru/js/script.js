var 
bluebutton = document.querySelector('.button1');
graybutton = document.querySelector('.button2');
r = document.querySelector(':root');
springbutton = document.querySelector('.springbutton');
mariru = document.querySelector('.mariru');

function myFunction_get() {
    var rs = getComputedStyle(r);   // Get the styles for the root
    alert("The value of --basiscolor is: " + rs.getPropertyValue('--basiscolor')); // Alert the value of mijn variable
    alert("The value of --shadowcolor is: " + rs.getPropertyValue('--shadowcolor'));
  }
  
  function graycolor() {
    r.style.setProperty('--basiscolor', 'gray'); // Set the value of the new variable 
    r.style.setProperty('--shadowcolor', 'rgba(0, 0, 0, 0.707)');
    
  }

  function bluecolor() {
    r.style.setProperty('--basiscolor', '#00aeec');
    r.style.setProperty('--shadowcolor', '#0098cd');
  }

bluebutton.addEventListener('click', bluecolor);
graybutton.addEventListener('click', graycolor);

function springmariru(){
    document.body.classList.toggle('spring');
}
springbutton.addEventListener('click', springmariru);
