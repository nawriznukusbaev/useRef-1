import './index.css';
import reportWebVitals from './reportWebVitals';
import React, {useEffect, useState, useRef} from 'react';

function ChangeColor() {
    const [displayEffect, setDisplayEffect] = useState('display');
    const styleDiv = {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        height:"100vh"
    }
    const inputRef = useRef(null);
    const btnFunction=(e)=>{
        if(e.target.textContent==='Show'){
            inputRef.current.style.display='block';
        }
        else inputRef.current.style.display='none';
    }

    return (
        <div style={styleDiv}>
            <div>
                <button onClick={btnFunction}>Show</button>
                <button onClick={btnFunction}>Hide</button>
            </div>
            <input  ref={inputRef} />
        </div>
    )
}

export default ChangeColor;


reportWebVitals();