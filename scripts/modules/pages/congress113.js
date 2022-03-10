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

// estado inicial, sirve como plantilla al arrancar la aplicacion, luego es pasada por parametros a las funciones
// de filtro para determinar que es lo que filtrara

const obj = {
    "D": true,
    "R": true,
    "I": true,
    "STATE": "ALL"
}


// llamado a la api inical
const Service = TGIFService(path, congress113, tbodyRef)
.then((data) => {
   return data
})

// obtiene los datos de la api y lo almacena dentro de rowArr
Service.then((data) => {
    rowArr.push(data)
    getState(rowArr) 
})

//filtra lo que venga de checkboxParty y pintara los nuevos datos
const filteredService = (obj) =>{
    // utiliza el array 'crudo' para filtrar segun los parametros de la plantilla
    const newArr = CheckboxFilter(rowArr, obj)
    // se elimina el contenido de tbody para pintar el nuevo contenido filtrado
    tbodyRef.innerText = ""     
    // pintara los nuevos datos
    TGIFService(path, congress113, tbodyRef, newArr)
}


const checkboxParty = () => {
    partyCheckboxList.forEach(e =>{
        if(e.checked === true){
            obj[e.value] = false
        }else(obj[e.value] = true)
    })
    
    // agrupa en un array las opciones de filtro "D", "I", "R"
    filteredService(obj)
}

const getState = (data) => {
    const allState = []
    // si el estado no existe en el array entonces lo pushea
    data[0].results[0].members.forEach((member) => {
        if(!allState.includes(member.state)){
            allState.push(member.state)
        }
    })
    // Ordena los nuevos estados y los incluye dentro del elemento select
    allState.sort().forEach((state) =>{
        const option = document.createElement('option')
        option.value = state;
        option.innerText = state;
        selectState.appendChild(option)
    })
}

// captadores de eventos, cuando cambien entonces filtraran informacion dependiendo su estado
DemocratCheckbox.addEventListener('change', checkboxParty)
IndependentCheckbox.addEventListener('change', checkboxParty)
selectState.onclick = (event) => {
    event.preventDefault();
    obj.STATE = selectState.value
    tbodyRef.innerHTML = ""
    filteredService(obj)
};