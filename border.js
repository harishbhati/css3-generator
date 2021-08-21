let applyOutput = document.querySelector('.modify__component');
let cssOutput = document.querySelector('.code__output');
let sliders = document.querySelectorAll('.range__slider');
let reserBtn = document.querySelector('.reset__btn');
let CopyCss = document.querySelector('.copy__btn');

//border
let border = document.querySelectorAll('.border__control');
let borderWidth = document.querySelector('#borderWidth');
let borderStyle = document.querySelector('#borderStyle');
let borderColor = document.querySelector('#borderColor');
let bgColor= document.querySelector('#bgColor');

//Set the box border
border.forEach(borders => {
    borders.addEventListener("input", () => {
        applyOutput.style.border = `${borderWidth.value}px ${borderStyle.value} ${borderColor.value}`;
        applyOutput.style.background = `${bgColor.value}`;
        cssOutput.innerHTML = `border: ${borderWidth.value}px ${borderStyle.value} ${borderColor.value};
        background: ${bgColor.value}`;
    });
});

//Reset the box border radius
reserBtn.addEventListener("click", () =>{
    borderWidth.value=0;
    //Reset the box border radius
    applyOutput.style.border = "none" 

    //After reseting the slider value, push that in to copy code
    cssOutput.innerHTML = `border: none`;
});

CopyCss,addEventListener("click",() => {
    // cssOutput.select();
    document.execCommand("copy");
});