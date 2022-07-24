import db from "../db.json";
import {useState} from 'react'; 
import './Quiz.css';

function QuizMe(){
    const array = db;
    //    const arrayLength = array.length;
    console.log(array.length);

    //Random numbers between 1 and 100 and to shuffle the options 
    let English = Math.floor(Math.random() * 100);
    let random =  Math.floor(Math.random() * 3);
    let number = [1,0,2]
    
    let result = number.filter((i) => (i!==random))//correct option will shuffle

    let value1 = array[English+random].H;
    let value2 = array[English+result[0]].H;
    let value3 = array[English+result[1]].H;

    const [Answer,setAnswer] =useState('');
    const [count,setCount] =useState(0);
    const [countCorrect,setCountCorrect] =useState(0);
    const [highscore,sethighscore] =useState(0);

    const handleClick = (e) =>{
        let value = e.target.value;
        if(value===array[English].H){
            document.getElementById('ans').setAttribute('style','color:green');
            setAnswer("Correct..");
            setCount(count+1);
            setCountCorrect(countCorrect+1);
        }
        else{
            document.getElementById('ans').setAttribute('style','color:red');
            setAnswer("Wrong !! Correct answer for '"+array[English].E+"' is "+array[English].H);
            setCount(count+1);

        }
    }
    const handleReset = ()=>{
        if(highscore<countCorrect)
            sethighscore(countCorrect)
        setCount(0);
        setCountCorrect(0);
        setAnswer('')
    }
    
    return(
        <div className="QuizM">
        <br/>
           <h3>Translate : {array[English].E}</h3>
           <button className="option" value={value1} onClick={handleClick}>{value1}</button>
           <button className="option" value={value2} onClick={handleClick}>{value2}</button>
           <button className="option" value={value3} onClick={handleClick}>{value3}</button>
           <p id="ans">{Answer}</p>
           <p id="score">Your Score : {countCorrect} / {count} </p>
           <p>High Score : {highscore}</p>
           <button onClick={handleReset}>Play Again</button>
        </div>
    );
}

export default QuizMe;