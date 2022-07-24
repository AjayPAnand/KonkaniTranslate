
import AutoSug from './AutoS/AutoSug';
import './App.css';
import QuizMe from './Quiz/QuizMe';
import { useState } from 'react';

function App() {
  const [quiz,setquiz] = useState(false);
  
  let handleQuiz =()=>{
   setquiz(true)
  }
  
  let handleQuizF =()=>{
    setquiz(false)
  }


 if(quiz===false){
  return (
    <div className="App">
      <h1>Translate to Konkani</h1>
      <h5>Search the word present in the list and to see the translation in Konkani</h5>
      <div className="Box">
      <AutoSug />
      <br />
      <button id="quiz" onClick={handleQuiz}>START QUIZ</button>
      <h4>For feedback @ ajaypanand007@gmail.com</h4>
    </div>
    </div>
  );
}
else if(quiz===true){
  return(
<div className="App">
<h2>Quiz</h2>
  <QuizMe />
  <button onClick={handleQuizF}>Go Back</button>
</div>
)}
  }

export default App;
