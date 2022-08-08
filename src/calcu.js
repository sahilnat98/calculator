import React, { useState } from "react"
import "./calcu.css"
export default function Calcu() {
    const [val, setval] = useState("");
    const handledelte = () => {
        try{
       setval("");
        }
        catch(error){
            setval("")
        }
    }
    const calculate = ()=>{
        try{
            setval(eval(val))
        }
        catch(error)
        {
              setval("Error")
        }
    }
    return (
        <>
            <div className="main">

                <div className="cal">
                    <h1 className="h">Calculator</h1>
                </div>
                <div className="firstline">

                    <div className="i">
                        <input className="in" placeholder=" 0" value={val} onChange={(e)=>setval(e.target.value)}></input>
                    </div>
                    <div >
                        <button className="c"  value='C' onClick={() => handledelte()}>C</button>
                    </div>
                </div>
                <div className="secondline">
                    <div >
                        <button className="f" value="1" onClick={(e) =>setval(val + e.target.value)}>1</button>
                    </div>

                    <div >
                        <button className="s" value="2" onClick={(e) =>setval(val + e.target.value)}>2</button>
                    </div>

                    <div>
                        <button className="t" value="3" onClick={(e) =>setval(val + e.target.value)}>3</button>
                    </div>

                    <div >
                        <button className="slash" value="/" onClick={(e) =>setval(val + e.target.value)} >/</button>
                    </div>
                </div>

                <div className="secondline">
                    <div >
                        <button className="f" value="4" onClick={(e) =>setval(val + e.target.value)}>4</button>
                    </div>

                    <div >
                        <button className="s" value="5" onClick={(e) =>setval(val + e.target.value)}>5</button>
                    </div>

                    <div>
                        <button className="t" value="6" onClick={(e) =>setval(val + e.target.value)}>6</button>
                    </div>

                    <div >
                        <button className="slash" value="-" onClick={(e) =>setval(val + e.target.value)} >-</button>
                    </div>
                </div>

                <div className="secondline">
                    <div >
                        <button className="f" value="7" onClick={(e) =>setval(val + e.target.value)}>7</button>
                    </div>

                    <div >
                        <button className="s" value="8" onClick={(e) =>setval(val + e.target.value)}>8</button>
                    </div>

                    <div>
                        <button className="t" value="9" onClick={(e) =>setval(val + e.target.value)}>9</button>
                    </div>

                    <div >
                        <button className="slash" value="+" onClick={(e) =>setval(val + e.target.value)}>+</button>
                    </div>
                </div>

                <div className="secondline">
                    <div >
                        <button className="fl" value="." onClick={(e) =>setval(val + e.target.value)} >.</button>
                    </div>

                    <div >
                        <button className="s" value="0" onClick={(e) =>setval(val + e.target.value)}>0</button>
                    </div>

                    <div>
                        <button className="equals" value="=" onClick={() => calculate()}>=</button>
                    </div>

                    <div >
                        <button className="slash" value="*" onClick={(e) =>setval(val + e.target.value)}>*</button>
                    </div>
                </div>
            </div>
        </>
    )
}