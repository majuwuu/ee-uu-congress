// esta funcion recibe los datos para filtrar y los parametros para filtrar

const CheckboxFilter = (apiData, party) => {
    
    // se settea un array vacio que sera llenado con los datos filtrados
    const arr = []
    const filteredBy = []
    const keyarr = [party]
    // se recorre uno por uno los datos de filtrado
    const keys = Object.keys(party);
    keys.map(keys => {
       keyarr.filter( 
            filteredKey => filteredKey[keys] === true || filteredKey[keys] !== "ALL" && filteredBy.push(keys))
    // console.log(keyArr)

       filteredBy.map(param => {
        apiData[0].results[0].members.filter((res) => res.party === param && arr.push(res));
        })


            
            // se encierra dentro de una constante el valor final del filtro
        // const filtered = apiData[0].results[0].members.filter((res) => 
        // si el estado del select es igual a 'all' entonces filtrara lo que venga en las keys
        // si no, filtrara por estado
        // console.log(res.party === party["D"])
        // party["STATE"] !== "all" &&
        // res.state === party["STATE]
        //  })

        // elimina el contenido anterior del array y es reemplazado con el nuevo contenido del filtro
        // arr.splice()
        // arr.push(...filtered)
    })
    // // una vez filtrado devuelve el nuevo array
    return arr
}


export default CheckboxFilter