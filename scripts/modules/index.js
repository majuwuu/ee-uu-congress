import congressService from "./services/index.service.js"


export default async function TGIFService(param, template, elem){
  let CS = await congressService(param)
  CS.results[0].members.map((data) => printTable(data, template, elem)) 
}

function printTable(data, template, elem){
  const tbodyRef = elem
  const Template = template(data)

  const newRow = tbodyRef.insertRow(tbodyRef.rows.length);
 
  newRow.innerHTML = Template;
}