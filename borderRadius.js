let applyOutput = document.querySelector('.modify__component');
let cssOutput = document.querySelector('.code__output');
let sliders = document.querySelectorAll('.range__slider');
let reserBtn = document.querySelector('.reset__btn');
let CopyCss = document.querySelector('.copy__btn');

//all corners variables
let allCorner = document.querySelector('#radiusAll');
let topLeft = document.querySelector('#radiusTopLeft');
let topRight = document.querySelector('#radiusTopRight');
let bottomRight = document.querySelector('#radiusBottomRight');
let bottomLeft = document.querySelector('#radiusBottomLeft');

//Where to Show value from sthe slider
let radiusAllInput = document.querySelector('#radiusAllInput');
let radiusTopLeftInput = document.querySelector('#radiusTopLeftInput');
let radiusTopRightInput = document.querySelector('#radiusTopRightInput');
let radiusBottomRightInput = document.querySelector('#radiusBottomRightInput');
let radiusBottomLeftInput = document.querySelector('#radiusBottomLeftInput');

//webkit and moz check
let optWebkit = document.querySelector('#opt_webkit');
let optMoz = document.querySelector('#opt_moz');

sliders.forEach(slider => {
// to eached click slider add input eventlistner
slider.addEventListener("input", (e) => {
        if(slider.classList.contains('all__range')){
            //Show value from sthe slider
            radiusAllInput.innerHTML = allCorner.value;
            applyOutput.style.borderRadius = allCorner.value + 'px';
            if (optWebkit.checked === true && optMoz.checked === true) {
                cssOutput.innerHTML = `border-radius: ${allCorner.value}px ${allCorner.value}px ${allCorner.value}px ${allCorner.value}px;
                -webkit-border-radius: ${allCorner.value}px ${allCorner.value}px ${allCorner.value}px ${allCorner.value}px;
                -moz-border-radius: ${allCorner.value}px ${allCorner.value}px ${allCorner.value}px ${allCorner.value}px;`;
            }
            else if(optWebkit.checked === true) {
                cssOutput.innerHTML = `border-radius: ${allCorner.value}px ${allCorner.value}px ${allCorner.value}px ${allCorner.value}px;
                -webkit-border-radius: ${allCorner.value}px ${allCorner.value}px ${allCorner.value}px ${allCorner.value}px;`;
            }
            else if(optMoz.checked === true) {
                cssOutput.innerHTML = `border-radius: ${allCorner.value}px ${allCorner.value}px ${allCorner.value}px ${allCorner.value}px;
                -moz-border-radius: ${allCorner.value}px ${allCorner.value}px ${allCorner.value}px ${allCorner.value}px;`;
            }
            else{

                cssOutput.innerHTML = `border-radius: ${allCorner.value}px ${allCorner.value}px ${allCorner.value}px ${allCorner.value}px;`;
            }
        }
        else{
            applyOutput.style.borderTopLeftRadius = topLeft.value + 'px';
            applyOutput.style.borderTopRightRadius = topRight.value + 'px';
            applyOutput.style.borderBottomRightRadius = bottomRight.value + 'px';
            applyOutput.style.borderBottomLeftRadius = bottomLeft.value + 'px';
            if (optWebkit.checked === true && optMoz.checked === true) {
                cssOutput.innerHTML = `border-radius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px;
                -webkit-border-radius: border-radius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px;
                -moz-border-radius:${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px`;
            }
            else if(optWebkit.checked === true) {
                cssOutput.innerHTML = `border-radius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px;
                -webkit-border-radius: border-radius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px`;
            }
            else if(optMoz.checked === true) {
                cssOutput.innerHTML = `border-radius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px;
                -moz-border-radius:${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px`;
            }
            else{
                cssOutput.innerHTML = `border-radius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px`;
            }
            //Show value from sthe slider
            radiusTopLeftInput.innerHTML = topLeft.value;
            radiusTopRightInput.innerHTML = topRight.value;
            radiusBottomRightInput.innerHTML = bottomRight.value;
            radiusBottomLeftInput.innerHTML = bottomLeft.value;
        }
    })
});

//Reset the box border radius
reserBtn.addEventListener("click", () =>{
    allCorner.value=0;
    topLeft.value = 0;
    topRight.value = 0;
    bottomRight.value = 0;
    bottomLeft.value = 0;
    //Reset the box border radius
    applyOutput.style.borderRadius = "0 0 0 0" 

    //After reseting the slider value, push that in to copy code
    cssOutput.innerHTML = `border-radius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px`;
});