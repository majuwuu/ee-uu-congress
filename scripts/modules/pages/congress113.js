import TGIFService from "../utils/TGIFService.js"
import { PAGES } from "../templates/pages.js"
import { congress113 } from "../templates/htmlTemplates.js"
import CheckboxFilter from "../utils/CheckboxFilter.js"

var tbodyRef = document.getElementById("113-houseTable").getElementsByTagName('tbody')[0];

const title = document.title === "House"
const path = title ? PAGES.HOUSE : PAGES.SENATE 
const DemocratCheckbox = document.querySelectorAll(".valores")[0];
const IndependentCheckbox = document.querySelectorAll(".valores")[1];
const RepublicanCheckbox = document.querySelectorAll(".valores")[2];
const partyCheckboxList = document.querySelectorAll(".valores");

const rowArr = []

// retorna los datos de la api para luego filtrar

const Service = TGIFService(path, congress113, tbodyRef)
.then((data) => {
   return data
})

Service.then((data) => {
    rowArr.push(data)
})

//filtra lo que venga de checkboxParty y pintara los nuevos datos

const filteredService = (e) =>{
    console.log(rowArr)
    const newArr = CheckboxFilter(rowArr, e)
    tbodyRef.innerHTML = "",
    TGIFService(path, congress113, tbodyRef, newArr)
}


const checkboxParty = () => {
    const arr = []
    partyCheckboxList.forEach(e =>{
        if(e.checked === true){
            arr.push(e.value)
        }
    })
    // agrupa en un array las opciones de filtro "D", "I", "R"
    if(arr.length !== 0){
      filteredService(arr)
    }
}


DemocratCheckbox.addEventListener('change', checkboxParty)
IndependentCheckbox.addEventListener('change', checkboxParty)
RepublicanCheckbox.addEventListener('change', checkboxParty)


const selectState = document.querySelector('#stateSelect')
        selectState.onclick = (event) => {
            event.preventDefault();
            alert(selectState.value);
        
};
