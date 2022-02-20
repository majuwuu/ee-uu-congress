import congressService from "./services/index.service.js"

export default async function TGIFService(param){
  let CS = await congressService(param)
  CS.results[0].members.map((data) => printTable(data)) 
}

function printTable(data){
  console.log(data)
}