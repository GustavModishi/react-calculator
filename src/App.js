import { useState } from "react";


function App() {


  const [answer, setAnswer] = useState("");
  const [expression, setExpression] = useState("");

  const handleNum =(e) => {
    const num = e.target.textContent
    const lastNumber = answer[answer.length - 1]
    if (lastNumber === '+'|| lastNumber === '-'|| lastNumber === '*' || lastNumber == '/') {
      setExpression(expression + num);

    }
    if (expression.charAt(0) === "0" ) {
      setExpression(expression.slice(1) + num);
    } 
    else {
      setExpression(expression + num);
    }
   
  }

  const handleSign = (e) => {
    const sign = e.target.textContent
    

    
    setExpression('0')
    return  setAnswer(answer+' '+ expression +' '+ sign + ' ')


  }

 
  

  const handleClear = (e) => {
    setAnswer("");
    setExpression("0");
  }
  
  const handleEqual = ()=>{
   
   setAnswer( eval( answer + ' ' + expression))
   setExpression('0')
  }

  const handleDecimal = (e) => {
    const decimal = e.target.textContent
    const lastNumber = expression.split(/[-+/*]/g).pop();
    if (!lastNumber) return;
    if (lastNumber?.includes(".")) return;
    setExpression(expression + decimal);
  }


  const handleZero = (e) => {
   
    const num = e.target.textContent

    if (expression.charAt(0) !== num) 
    {
      setExpression(expression + num);
    }

  }

  return (
    <div className="App">
    
<div className="calculator">    
      <div id="display" >
      {answer}
        <div id=" answer"></div>
        <div id="expression">{expression}</div>
      </div>

      <div id="clear" onClick={handleClear} className="row">AC</div>
      <div id="divide" onClick={handleSign}>/</div>
      <div id="multiply" onClick={handleSign}>*</div>
      <div id="seven" onClick={handleNum}>7</div>
      <div id="eight"  onClick={handleNum}>8</div>
      <div id="nine"  onClick={handleNum}>9</div>
      <div id="subtract" onClick={handleSign} >-</div>
      <div id="four"  onClick={handleNum}>4</div>
      <div id="five"  onClick={handleNum}>5</div>
      <div id="six" onClick={handleNum}>6</div>
      <div id="add"  onClick={handleSign}>+</div>
      <div id="one" onClick={handleNum}>1</div>
      <div id="two" onClick={handleNum}>2</div>
      <div id="three"  onClick={handleNum}>3</div>
      <div id="equals" onClick={ handleEqual }>=</div>
      <div id="zero"  onClick={handleZero}>0</div>
      <div id="decimal" onClick={handleDecimal}>.</div>
     
</div>

    </div>
  );
}

export default App;
