import congressService from "../services/index.service.js"
import printTable from "../templates/printTable.js"

// Funciona como mediador entre la api y el servidor
export default async function TGIFService(param, template, elem, data){ 
  // promesa // data: datos filtrados de la api
  let CS = await congressService(param)
  // si data existe, mapea los datos y los manda a la funcion que pinta las tablas
  if(data){
    data.map((data) => printTable(data, template, elem)) 
    // si no, manda los datos crudos directo de la api
  }else CS.results[0].members.map((data) => printTable(data, template, elem)) 
  return CS
}
