let decrBtn = document.getElementById("dec-btn");
let resetBtn = document.getElementById("reset-btn");
let incrBtn = document.getElementById("incr-btn");
let display = document.querySelector(".display");

let ourNum = 0;

decrBtn.addEventListener("click", function(){
    ourNum -= 1;
    display.textContent = ourNum;
    colorCheck(ourNum);
});

resetBtn.addEventListener("click", function(){
    ourNum = 0;
    display.textContent = ourNum;
    colorCheck(ourNum);
});

incrBtn.addEventListener("click", function(){
    ourNum += 1;
    display.textContent = ourNum;
    colorCheck(ourNum);
});

function colorCheck(ourNum){
    if(ourNum> 0){
        display.style.color = "green";
    }
    else if(ourNum < 0){
        display.style.color = "red";
    }
    else{
        display.style.color = "#282828";
    }
}

console.log(ourNum);

