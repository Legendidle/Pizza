let elForm = document.querySelector(".order__form");
let elSelect = document.querySelector(".select");
let selectText = document.querySelector(".order__result");
let arrSelect = ["Thick", "Thin","Medium"];

for(let i = 0; i < arrSelect.length; i++) {
  let elOption = document.createElement("option");
  elOption.setAttribute("class", "form__option2");
  elOption.setAttribute("name", "Bread")
    elOption.textContent= arrSelect[i];
    elOption.value = arrSelect[i];
    elSelect.appendChild(elOption);
}


let elRadio = document.querySelector(".form__radio");
let radioText = document.querySelector(".order__result-size");
let arrRadio = ["25 sm", "30 sm", "35 sm"];
for (let i = 0; i < arrRadio.length; i++) {

  let elRadioLabel = document.createElement("label");
  let elRadioInput = document.createElement("input");
  elRadioLabel.setAttribute("class", "label__radio py-4 px-2 border rounded-circle me-4 mb-4");
  elRadioLabel.textContent = arrRadio[i];
  elRadioInput.setAttribute("class", "input__radio");
  elRadioInput.setAttribute("type", "radio");
  elRadioInput.setAttribute("name", "Size");
  elRadioInput.value = arrRadio[i];
  elRadio.appendChild( elRadioLabel);
  elRadioLabel.appendChild(elRadioInput);
}




let elCheck = document.querySelector(".form__check");
let checkText = document.querySelector(".order__result-ing");
let arrCheck = ["Tomato","Cucumber","Turkey","Thrush","Olive","Qazi"]
for(let i = 0; i < arrCheck.length; i++ ) {
    let elCheckLabel = document.createElement("label");
    let elCheckInput = document.createElement("input");
    
    elCheckLabel.setAttribute("class", "label__checkbox w-50 fs-5 text-start");
    elCheckInput.setAttribute("class", "input__check me-3");
    elCheckInput.setAttribute("type","checkbox");
    elCheckInput.setAttribute("name", "");
    
    elCheckLabel.textContent = arrCheck[i];
    elCheckInput.value = arrCheck[i];
    
    elCheck.appendChild(elCheckLabel);
    elCheckLabel.appendChild(elCheckInput);
    elCheckLabel.prepend(elCheckInput);
}




elSelect.addEventListener("change", function () {
  selectText.textContent = elSelect.value;
})




elRadio.addEventListener("change", function (evt) {
  radioText.textContent = evt.target.value;
})




let newArr = [];
let elInput = document.querySelectorAll(".input__check");
for (let k = 0; k < elInput.length; k++) {
    
    let elItem = document.createElement("li");
    elItem.setAttribute("class", "text, text-start, list-unstyled")
    elInput[k].addEventListener("change", function () {
        
        if (elInput[k].checked) {
            newArr.push(elInput[k].value);
        
            for(let i = 0; i < newArr.length; i++) {
                elItem.textContent= newArr[i];
                checkText.appendChild(elItem);         
            }
        }
        else {
          checkText.removeChild(elItem);
        } 
    })
}