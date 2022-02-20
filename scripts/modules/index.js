import congressService from "./services/index.service.js"


export default async function TGIFService(param){
  let CS = await congressService(param)
  CS.results[0].members.map((data) => printTable(data)) 
}

function printTable(data){
  console.log(data)
  var houseTable = `<tr>
  <td> 
    <a class="tH113" href="${data.url}">
      ${data.first_name}  ${data.last_name}
    </a>
  </td>
  <td> 
  ${data.party}
  </td>
  <td>
  ${data.state}
  </td>
  <td>
  ${data.seniority}
  </td>
  <td>
  ${data.votes_with_party_pct}%
  </td>
  </tr>`

  var tbodyRef = document.getElementById("113-houseTable").getElementsByTagName('tbody')[0];
  var newRow = tbodyRef.insertRow(tbodyRef.rows.length);
 
  newRow.innerHTML = houseTable;
}