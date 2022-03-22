import {useState} from "react";
import db from "./db";
import './App.css';
import List from './List';

function App() {
    const [name, setName] = useState('No Entry');
    const [val,setVal] = useState('');
    const [lan,setLan] = useState('Konkani');

const handleChange = (e) =>{
  var s =e.target.value;
  const data = db.find((d) => d.E === s.toLowerCase());
  
  if(data){
    setVal(data.E);
    if(lan==="कांगनी")
      setName(data.H);
    else if(lan==="കൊങ്കണി")
      setName(data.M);
    else  
      setName(data.K);
  }
  else{
    setName('No Entry');
    setVal('');
  }
  }

const handleClick = (e) =>{
    var x = e.target.value;
    const data = db.find((d) => d.E === val);
    if(data){
      if(x==="H"){
        setLan('कांगनी');
        setName(data.H);
      }
        else if(x==="M")
        {
          setLan('കൊങ്കണി');
          setName(data.M);
        }
        else{
          setName(data.K);
          setLan('Konkani');
        }
    }
    else{
      setName('No Entry')
    }

  }

  return (
    <div className="App">
      <h1>Translate to Konkani</h1>
    
      <div className="Box">
      <input onChange={handleChange} placeholder="Enter word to Translate" type="text" ></input>
      <select name="Language" onChange={handleClick}>
        <option>Select Language</option>
        <option value="H">Hindi</option>
        <option value="M">Malayalam</option>
      </select>

      <label>{lan} : <p>{name}</p> </label>
      </div>
      <List />
    </div>

  );
}
export default App;
