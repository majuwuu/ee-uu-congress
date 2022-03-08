import TGIFService from "../utils/TGIFService.js"
import { PAGES } from "../templates/pages.js"
import { congress113 } from "../templates/htmlTemplates.js"
import CheckboxFilter from "../utils/CheckboxFilter.js"

const tbodyRef = document.getElementById("113-houseTable").getElementsByTagName('tbody')[0];
const title = document.title === "House"
const path = title ? PAGES.HOUSE : PAGES.SENATE 
const DemocratCheckbox = document.querySelectorAll(".valores")[0];
const IndependentCheckbox = document.querySelectorAll(".valores")[1];
const RepublicanCheckbox = document.querySelectorAll(".valores")[2];
const partyCheckboxList = document.querySelectorAll(".valores");
const selectState = document.querySelector('#stateSelect')
const rowArr = []

const obj = {
    "D": null,
    "R": null,
    "I": null,
    "STATE": "ALL"
}

// retorna los datos de la api para luego filtrar
const Service = TGIFService(path, congress113, tbodyRef)
.then((data) => {
   return data
})

Service.then((data) => {
    rowArr.push(data)
    getState(rowArr) 
})

//filtra lo que venga de checkboxParty y pintara los nuevos datos

const filteredService = (obj) =>{
    const newArr = CheckboxFilter(rowArr, obj)
    tbodyRef.innerText = ""
    TGIFService(path, congress113, tbodyRef, newArr)
}


const checkboxParty = () => {
    partyCheckboxList.forEach(e =>{
        if(e.checked === true){
            obj[e.value] = true
        }else(obj[e.value] = false)
    })
    // agrupa en un array las opciones de filtro "D", "I", "R"
    filteredService(obj)
}

const getState = (data) => {
    const allState = []
    data[0].results[0].members.forEach((member) => {
        if(!allState.includes(member.state)){
            allState.push(member.state)
        }
    })
    allState.sort().forEach((state) =>{
        const option = document.createElement('option')
        option.value = state;
        option.innerText = state;
        selectState.appendChild(option)
    })
}

selectState.addEventListener('change', checkboxParty)
DemocratCheckbox.addEventListener('change', checkboxParty)
IndependentCheckbox.addEventListener('change', checkboxParty)
selectState.onclick = (event) => {
    event.preventDefault();
    obj.STATE = selectState.value
    tbodyRef.innerHTML = ""
    filteredService(obj)
};