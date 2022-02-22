import TGIFService from "./index.js"
import { PAGES } from "./templates/pages.js"
import { congress113 } from "./templates/htmlTemplates.js"
import filter from "./filter.js";

var tbodyRef = document.getElementById("113-houseTable").getElementsByTagName('tbody')[0];

const title = document.title === "House"
const path = title ? PAGES.HOUSE : PAGES.SENATE 

const Service = TGIFService(path, congress113, tbodyRef)

let DemocratElem = document.querySelectorAll(".valores")[0];
let IndependentElem = document.querySelectorAll(".valores")[1];
let RepublicanElem = document.querySelectorAll(".valores")[2];

let partyCheckAllElem = document.querySelectorAll(".valores");

const checkboxParty = () => {
    partyCheckAllElem.forEach(e =>{
        if(e.checked === true){
         filter([], e)
        }
    })
}

DemocratElem.addEventListener('change', checkboxParty)
IndependentElem.addEventListener('change', checkboxParty)
RepublicanElem.addEventListener('change', checkboxParty)
