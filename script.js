let submitButton = document.getElementById("button")
let secondButton = document.getElementById("second_button")
let weightInput = document.getElementById("weightInput")
let heightInput = document.getElementById("heightInput")
let contentMiddleInside = document.getElementById("content_middle_inside")
let contentMiddle = document.getElementById("content_middle")

let second_middle = document.getElementById("second_middle")
let result = document.getElementById("result")
let resultP1 = document.getElementById("result_p1")
let resultP2 = document.getElementById("result_p2")

let alert1 = document.getElementById("notFilled1")
let alert2 = document.getElementById("notFilled2")

let heightAmount = heightInput.value;
let heightLength = heightInput.length;
let newHeight;

    heightInput.addEventListener("input", dots)

    function dots() {
        heightInput["value"].innerHTML = "a" + heightInput.value;
    }

submitButton.addEventListener("click", calcIMC)


function calcIMC(){
    if (weightInput.value.length === 0){
        alert1.style.display="block"
        alert2.style.display="none"
    } else if (heightInput.value.length === 0) {
        alert2.style.display="block"
        alert1.style.display="none"

    } else {

    /*Weight*/
    let WV = weightInput.value;
    WV = Number(WV);
    WV = WV.toFixed(2);
    WV = Number(WV);
    /*Height*/
    let HV = heightInput.value;
    HV = Number(HV);
    HV = HV.toFixed(2);
    HV = Number(HV);
    /*Calc*/
    let calcAll = WV / (HV * HV);
    calcAll = calcAll.toFixed(2);
    calcAll = Number(calcAll);
    console.log(calcAll);
    /**Disable the First Layer**/
    contentMiddleInside.style.display="none";
   /*Turning able the Second Layer*/
   second_middle.style.display="flex";

   /* Showing the Results*/
   resultP1.innerHTML = "Seu IMC é de " + calcAll;
   /*Verifying the Results*/
   if (calcAll < 18.5) {
    resultP2.textContent = "(Considerado magro)"
   } else if (18.5 < calcAll && calcAll < 24.9) {
    resultP2.textContent = "(Considerado normal)"
   } else if (24.9 < calcAll && calcAll < 29.9) {
    resultP2.textContent = "(Considerado sobrepeso)"
   } else if (29.9 < calcAll && calcAll < 39.9) {
    resultP2.textContent = "(Considerado obeso)"
   } else {
    resultP2.textContent = "(Considerado obeso grave)"
   }
   if (alert1.style.display="block") {
    alert1.style.display="none";
   }
   if (alert2.style.display="block"){
    alert2.style.display="none";
   }
}
}

secondButton.addEventListener("click", comeBack)

function comeBack(){

   /*Disabling the Second Layer*/
   second_middle.style.display="none";
   /*Turning able the First Layer*/
   contentMiddleInside.style.display="flex";
}

