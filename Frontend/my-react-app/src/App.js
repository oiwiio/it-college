import React, { useState } from 'react';
import { Counter } from './features/counter/Counter'


function App(){
    const [count, setCount] = useState(0);
    
    return (
    <div className='buton'>
        <h1 className='logo'> счет: {count}</h1>
        <button  className='app'onClick={() => setCount(count+1)}>+1</button>
    </div>
    );
}

export default App;