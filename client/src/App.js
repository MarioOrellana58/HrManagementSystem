import './App.css';
import {useState} from 'react'
import Axios from 'axios'
function App() {

  const API_ENDPOINT = 'http://localhost:3001'
  const [employee, setEmployee] = useState({
    name: "",
    age: 0,
    country: "",
    position: "",
    wage: 0
  });

  const postEmployee = async () => {
    try {
      var response = await Axios.post(API_ENDPOINT + '/create', employee)
      console.log(response)
      if (response.status === 200) {
        alert("Empleado creado, su ID es " + response.data.insertId)
      } else {
        alert("Hubo un error: " + response)
      }
    } catch (error) {
      alert("Hubo un error: " + error)
    }    
  }

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type = "text" 
          onChange={(e) => {
            setEmployee(prevState => ({
                ...prevState,
                name: e.target.value
            }));
          }}
        />
        
        <label>Age:</label>
        <input type = "number"
          onChange={(e) => {
            setEmployee(prevState => ({
                ...prevState,
                age: parseInt(e.target.value)
            }));
          }}
        />
        
        <label>Country:</label>
        <input type = "text"
          onChange={(e) => {
            setEmployee(prevState => ({
                ...prevState,
                country: e.target.value
            }));
          }}
        />
        
        <label>Position:</label>
        <input type = "text"
          onChange={(e) => {
            setEmployee(prevState => ({
                ...prevState,
                position: e.target.value
            }));
          }}
        />

        <label>Wage (year):</label>
        <input type = "number"
          onChange={(e) => {
            setEmployee(prevState => ({
                ...prevState,
                wage: parseInt(e.target.value)
            }));
          }}
        />

        <button onClick={async () => {
          await postEmployee()
        }}>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
