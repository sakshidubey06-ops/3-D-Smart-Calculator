const display = document.getElementById("display");

const clickSound = document.getElementById("clickSound");

function playClick(){
    clickSound.pause();
    clickSound.currentTime = 0;
    clickSound.volume = 0.5;
    clickSound.play();
}

function appendValue(value){
    playClick();
        display.value += value;
        display.scrollLeft = display.scrollWidth;
        if (display.value.length > 18)
        {
            display.style.fontSize = "18";
        } else if
          (display.value.length > "12"){
            display.style.fontSize = "22px";
          } else if 
          (display.value.length > 8){
            display.style.fontSize = "28px";
          } else {
            display.style.fontSize = "35px";
          }
    }

function clearDisplay(){
    playClick();
    display.value = "";
    display.style.fontSize = "35px";
}
function deleteLast(){
    playClick();
    display.value = display.value.slice(0,-1);
}
function calculate() {
    playClick()
    try{
        display.value = 
        eval (display. value);
    } catch (error){
        display.value = "Error";
    }
    
}