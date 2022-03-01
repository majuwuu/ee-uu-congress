// esta funcion recibe los datos para filtrar y los parametros para filtrar

const CheckboxFilter = (apiData, party) => {
    // se settea un array vacio que sera llenado con los datos filtrados
    var arr = []
    // se recorre uno por uno los datos de filtrado
    party.map(data => {
        const filtered = apiData[0].results[0].members
            .filter((res) => res.party === data) 
        arr.push(...filtered)
    })
    // una vez filtrado devuelve el nuevo array
    return arr
}


export default CheckboxFilter