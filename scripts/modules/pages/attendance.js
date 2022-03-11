import TGIFService from "./index.js"
import { PAGES } from "./templates/pages.js"
import { attendanceGlance } from "./templates/htmlTemplates.js"

var attendanceGlanceElem = document.getElementById("attendanceGlance").getElementsByTagName('tbody')[0];
var attendanceLeastElem = document.getElementById("attendanceLeast").getElementsByTagName('tbody')[0];
var attendanceMostElem = document.getElementById("attendanceMost").getElementsByTagName('tbody')[0];

const title = document.title === "House"
const path = title ? PAGES.HOUSE : PAGES.SENATE 

TGIFService(path, attendanceGlance, attendanceGlanceElem)
TGIFService(path, attendanceGlance, attendanceLeastElem)
TGIFService(path, attendanceGlance, attendanceMostElem)





