let value = document.getElementById('value');
let reset = document.getElementById('btnReset');
let count = 0;
let rem = 3;


document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
      value.textContent = count++;
      value.style.fontSize = rem++ + 'rem';

      if (rem >= 40) value.style.fontSize = 40 + 'rem';
     
    }
  }

  

  reset.addEventListener('click', ()=>{
    count = 0;
    value.textContent = 0;
    value.style.fontSize = 3 + 'rem';
  })