import congressService from "./modules/services/index.service.js"
import { PAGES } from "./modules/templates/pages.js"

const tableBody = document.getElementById("tableBody")
const selector = document.getElementById("selector")
let checkboxes = document.querySelectorAll(".valores")


const alternativeFilter = async () => {
    const title = document.title === "House"
    const path = title ? PAGES.HOUSE : PAGES.SENATE 
    let members = await congressService(path)
    members = members.results[0].members
    console.log(members)

    
    const filters = {
        D: true,
        R: true,
        ID: true,
        STATE: "all"
    }

    selector.addEventListener("change", (e)=>{ 
        console.log(e)
    } )

}
alternativeFilter()