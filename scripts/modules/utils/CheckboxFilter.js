// esta funcion recibe los datos para filtrar y los parametros para filtrar

const CheckboxFilter = (apiData, party) => {
    
    // se settea un array vacio que sera llenado con los datos filtrados
    var arr = []
    // se recorre uno por uno los datos de filtrado
    const keys = Object.keys(party);
    keys.map(data => {
        const filtered = apiData[0].results[0].members
        .filter((res) => 
        party["STATE"] === "all" ? 
        res.party === data : 
        res.state === party["STATE"]
        )
        arr.splice()
        arr.push(...filtered)
    })
    // // una vez filtrado devuelve el nuevo array
    console.log(arr)
    return arr
}


export default CheckboxFilter