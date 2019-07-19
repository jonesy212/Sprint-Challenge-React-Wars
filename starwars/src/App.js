import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const fetch = () => {
    axios.get('https://swapi.co/api/people/1/')
    .then(response =>{
      setData(response.data)
    })

    .catch(error => {console.log("Error: Please try again later")}
    )
  }

  useEffect(fetch, [])
  console.log(data)

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
