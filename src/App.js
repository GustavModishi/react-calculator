import { useState } from "react";


function App() {


  const [answer, setAnswer] = useState("");
  const [expression, setExpression] = useState("0");


 
 
  const handleNum =(e) => {
    const num = e.target.textContent

    const n =answer[answer.search('=')]
    const op = expression[expression.search(/[-+/*]/)]
    const newAnswer = answer.split(n)[1]
    console.log(op)

    if ( expression === "0"  ) {

      setExpression(num);


    }
    if(expression[0]===op)
    {
      setExpression(num);
     
    }
    if(newAnswer || expression === "0")
    {
      setAnswer('');
      setExpression( expression.slice(10) +num);
    }
    else{

    setExpression(expression+ num);
    }
   
  }
   

  const handleSign = (e) => {
    const sign = e.target.textContent
    const n =answer[answer.search('=')]
    const newAnswer = answer.split(n)[1]
    const op = answer[answer.length-1]
    const isOperator = () => {
      const sign = e.target.textContent
      return /[*/+-]/.test(sign);
    };
    
    if(answer !== '0') {
      setAnswer( answer +' '+expression  +' '+sign + ' ')
      setExpression('')
    
    }
    if(n === '=')
    {
      setAnswer( newAnswer +' '+ sign + ' ')
    }
    if(expression === ''){
      setAnswer(answer )
  }
  }
  
    

  const handleClear = (e) => {
   setAnswer('')
    setExpression('0');
  }
  
  const handleEqual = ()=>{ 
    setAnswer(answer +' '+ expression+' = '+ eval(answer+expression).toPrecision(4).replace(/(?:\.0+|(\.\d+?)0+)$/, "$1"))
    setExpression(eval(answer+expression).toPrecision(4).replace(/(?:\.0+|(\.\d+?)0+)$/, "$1"));
   
  }

  const handleDecimal = (e) => {
    const decimal = e.target.textContent
    const lastNumber = expression.split(/[-+/*]/g).pop();
    console.log(lastNumber)
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

  const handleNegative = () => {
    
    
      setExpression(
        expression.toString().charAt(0) === "-" ? 
        expression.slice(1) : "-" + expression
      )
  }

  return (
  <div className="App">
    
    <div className="calculator">    
      <div id="display" >
        <div id="output">{answer}</div>
        <div id="input">{expression}</div>
        
      </div>

      <div id="clear" className="AC" onClick={handleClear} >AC</div>
      <div id="negative" onClick={handleNegative}>+/-</div>
      <div id="divide" className="sign" onClick={handleSign}>/</div>
      <div id="multiply" className="sign" onClick={handleSign}>*</div>
      <div id="seven" className="number" onClick={handleNum}>7</div>
      <div id="eight"  className="number" onClick={handleNum}>8</div>
      <div id="nine"  className="number" onClick={handleNum}>9</div>
      <div id="subtract" className="sign" onClick={handleSign} >-</div>
      <div id="four"  className="number" onClick={handleNum}>4</div>
      <div id="five"  className="number" onClick={handleNum}>5</div>
      <div id="six" className="number" onClick={handleNum}>6</div>
      <div id="add"  className="sign" onClick={handleSign}>+</div>
      <div id="one" className="number" onClick={handleNum}>1</div>
      <div id="two" className="number" onClick={handleNum}>2</div>
      <div id="three"  className="number" onClick={handleNum}>3</div>
      <div id="equals" className="equals" onClick={ handleEqual }>=</div>
      <div id="zero"  className="number" onClick={handleZero}>0</div>
      <div id="decimal" className="decimal" onClick={handleDecimal}>.</div>
     
</div>

    </div>
  );
}

export default App;
