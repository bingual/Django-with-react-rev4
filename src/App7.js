/*
Context API
*/
import React, { createContext, useContext } from 'react';

/*
// 속성 값을 전달하는 방식의 일반적인 고차 컴퍼넌트
const App7 = () => <Level1 message={'message'} />;

const Level1 = ({ message }) => <Level2 message={'message'} />;
const Level2 = ({ message }) => <Level3 message={'message'} />;
const Level3 = ({ message }) => <div>Level3 : {message}</div>;
*/

// Context API를 활용한 고차 컴퍼넌트
const MessageContext = createContext();
const App7 = () => (
    <MessageContext.Provider value={'Provider Values'}>
        <Level1 />
    </MessageContext.Provider>
);

const Level1 = () => <Level2 />;
const Level2 = () => <Level3 />;
const Level3 = () => {
    // useContext Hook을 활용한 방법
    const message = useContext(MessageContext);

    return <div>Level3 : {message}</div>;
    // 엘리먼트를 활용한 방법
    // <MessageContext.Consumer>
    //     {(message) => `Level3 : ${message}`}
    // </MessageContext.Consumer>
};

export default App7;
