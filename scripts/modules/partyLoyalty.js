import TGIFService from "./index.js"
import { PAGES } from "./templates/pages.js"
import { attendanceGlance } from "./templates/htmlTemplates.js"

var partyGlanceElem = document.getElementById("partyGlance").getElementsByTagName('tbody')[0];
var partyLeastElem = document.getElementById("partyLeast").getElementsByTagName('tbody')[0];
var partyMostElem = document.getElementById("partyMost").getElementsByTagName('tbody')[0];

const title = document.title === "House"
const path = title ? PAGES.HOUSE : PAGES.SENATE 

TGIFService(path, attendanceGlance, partyGlanceElem)
TGIFService(path, attendanceGlance, partyLeastElem)
TGIFService(path, attendanceGlance, partyMostElem)
