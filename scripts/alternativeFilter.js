import congressService from "./modules/services/index.service.js"
import { PAGES } from "./modules/templates/pages.js"

const alternativeFilter = async () => {
    const title = document.title === "House"
    const path = title ? PAGES.HOUSE : PAGES.SENATE 
    let members = await congressService(path)
    members = members.results[0].members
    console.log(members)
}
alternativeFilter()