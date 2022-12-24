/*
Context API
*/
import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

const App8 = () => {
    const [value, setValue] = useState(0);
    const onIncrement = () => setValue((prevValue) => prevValue + 1);

    return (
        <div>
            App : {value}
            <button onClick={onIncrement}>Click1</button>
            <CounterContext.Provider value={{ value, onIncrement }}>
                <Level3 />
            </CounterContext.Provider>
        </div>
    );
};

const Level3 = () => {
    // App8의 value와 onIncrement 함수를 참조
    const { value, onIncrement } = useContext(CounterContext);
    return (
        <div>
            Level: {value}
            <button onClick={onIncrement}>Click2</button>
        </div>
    );
};

export default App8;
