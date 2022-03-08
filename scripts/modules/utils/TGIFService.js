import congressService from "../services/index.service.js"
import printTable from "../templates/printTable.js"

export default async function TGIFService(param, template, elem, data){
  
  let CS = await congressService(param)
  if(data){
    data.map((data) => printTable(data, template, elem)) 
  }else CS.results[0].members.map((data) => printTable(data, template, elem)) 
  return CS
}
