import React, {useState} from 'react';

const Test = () => {
    const [count, setCount] = useState(0);

    const onUpdate = (event) => { setCount(count + event); };

    let cssClass = null;

    if (count >= 3) {
        cssClass ="red";
    }
    return (
        <div className={ cssClass }>
            <span>{count < 0 ? 'zéro' : count}</span>
            <button onClick={() => onUpdate(1) }>+</button>
            <button onClick={() => onUpdate(-1) }>-</button>
        </div>
    );
    };
    

export default Test;