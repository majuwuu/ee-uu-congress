export const congress113 = (data) => {
return `<tr>
  <td> 
    <a class="tH113" href="${data.url}">
      ${data.last_name}  ${data.first_name}
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
}

export const attendanceGlance = (data) => {
    return `<tr>
      <td> 
        <a class="tH113" href="${data.url}">
          ${data.last_name}  ${data.first_name}
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
      </tr>`
    }