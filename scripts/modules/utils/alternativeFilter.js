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
        I: true,
        STATE: "all"
    }
    const filterMembers = (filterChanged) => {
        // let membersFilter =
        console.log(filterChanged)
    }
    const changeFilter = (e) => {
        if(e.target.checked === undefined){
            filters.STATE = e.target.value
        }else{
            filters[e.target.value] = e.target.checked
        }
        filterMembers(filters)
        
        // console.log(e.target.checked)
        // console.log(e.target.value)
    }

    selector.addEventListener("change", (e)=>{ 
        changeFilter(e)
    } )
    
    checkboxes.forEach(checkbox =>{
        checkbox.addEventListener("change", (e)=>{
            changeFilter(e)
        })
    })
}
alternativeFilter()

  