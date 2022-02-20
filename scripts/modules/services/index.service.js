export default function congressService (param) {
    return fetch(`http://localhost:3001/${param}`)
      .then((res) => res.json())
      .then((data) => data)
      .catch(err => console.log(err))
    }
  