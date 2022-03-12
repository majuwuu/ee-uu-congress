import congressService from "../services/index.service.js"
import { PAGES } from "./pages.js"

const tableBody = document.getElementById("tableBody")
const selector = document.getElementById("selector")
let checkboxes = document.querySelectorAll(".valores")


const alternativeFilter = async () => {
    const title = document.title === "House"
    const path = title ? PAGES.HOUSE : PAGES.SENATE 
    let members = await congressService(path)
    members = members.results[0].members
    

    const filters = {
        D: true,
        R: true,
        ID: true,
        STATE: "all"
    }
    
    const printTboby = (membersToRender) => {
        tableBody.innerHTML = ""
        console.log(membersToRender)
    }

    const filterMembers = (filterChanged) => {
        let membersFilter = members.filter( member => (filterChanged[member.party] == true ))
        membersFilter = membersFilter.filter(member => (filterChanged.STATE == member.state || filterChanged.STATE == "all"))
        printTboby(membersFilter)
    }
    
    const changeFilter = (e) => {
        if(e.target.checked === undefined){
            filters.STATE = e.target.value
        }else{
            filters[e.target.value] = e.target.checked
        }
        filterMembers(filters)
    }

    selector.addEventListener("change", (e)=>{ 
        changeFilter(e)
    })
    
    checkboxes.forEach(checkbox =>{
        checkbox.addEventListener("change", (e)=>{
            changeFilter(e)
        })
    })
}
alternativeFilter()

  