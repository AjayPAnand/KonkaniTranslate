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
      <h5>Anyone interested can use this page to learn Konkani.</h5>
      <h5>Enter the word present in the list and choose any languange from dropdown to see the translation.</h5>
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
      <h4>Note:This page is created for the sole purpose of learning.
      </h4><h4>Please don't use this for commercial purpose</h4>

    </div>

  );
}
export default App;
