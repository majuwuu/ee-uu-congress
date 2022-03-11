import congressService from "./index.service.js"
import printTable from "../utils/printTable.js"

export default async function TGIFService(param, template, elem){
  let CS = await congressService(param)
  CS.results[0].members.map((data) => printTable(data, template, elem)) 
  return CS.results[0].members
}
