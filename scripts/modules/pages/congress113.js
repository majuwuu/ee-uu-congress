import TGIFService from "../services/index.js"
import { PAGES } from "../utils/pages.js"
import { congress113 } from "../utils/htmlTemplates.js"

var tbodyRef = document.getElementById("113-houseTable").getElementsByTagName('tbody')[0];

const title = document.title === "House"
const path = title ? PAGES.HOUSE : PAGES.SENATE 

const Service = TGIFService(path, congress113, tbodyRef)


