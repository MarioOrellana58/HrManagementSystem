import './App.css';
import {useState} from 'react'
function App() {

  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    country: "",
    position: "",
    wage: 0
  });

  const postData = () => {
    console.log(formData)
  }

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type = "text" 
          onChange={(e) => {
            setFormData(prevState => ({
                ...prevState,
                name: e.target.value
            }));
          }}
        />
        
        <label>Age:</label>
        <input type = "number"
          onChange={(e) => {
            setFormData(prevState => ({
                ...prevState,
                age: parseInt(e.target.value)
            }));
          }}
        />
        
        <label>Country:</label>
        <input type = "text"
          onChange={(e) => {
            setFormData(prevState => ({
                ...prevState,
                country: e.target.value
            }));
          }}
        />
        
        <label>Position:</label>
        <input type = "text"
          onChange={(e) => {
            setFormData(prevState => ({
                ...prevState,
                position: e.target.value
            }));
          }}
        />

        <label>Wage (year):</label>
        <input type = "number"
          onChange={(e) => {
            setFormData(prevState => ({
                ...prevState,
                wage: parseInt(e.target.value)
            }));
          }}
        />

        <button onClick={postData}>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
