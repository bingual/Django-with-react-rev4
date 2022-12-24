/*
Context API와 Reducer 패턴
*/
import React, { createContext, useContext, useReducer } from 'react';

// Context 생성
const ConunterContext = createContext();

// 중복방지 prefix을 포함한 오타방지 상수생성
const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

// dispatch 함수 호출시 reducer 함수 호출
const reducer = (prevState, action) => {
    // paylod 디폴트 값 지정, 전달 받은 paylod 값 활용
    const { type, paylod: value = 1 } = action;
    if (type === INCREMENT) return prevState + value;
    else if (type === DECREMENT) return prevState - value;
    return prevState;
};

// object를 만들어주는 함수 정의
const actionIncrement = (value) => ({ type: INCREMENT, paylod: value });
const actionDecrement = (value) => ({ type: DECREMENT, paylod: value });

const App9 = () => {
    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h1 onClick={() => dispatch(actionIncrement(10))}>App: {state}</h1>
            <ConunterContext.Provider value={{ state, dispatch }}>
                <Gamebox />
            </ConunterContext.Provider>
        </div>
    );
};

const Gamebox = () => {
    // useContext Hook을 사용하여 Provider 값 추출
    const { state: counterValue, dispatch } = useContext(ConunterContext);
    const onClick = () => dispatch(actionDecrement(5));
    return (
        <div>
            <h2 onClick={onClick}>Gamebox: {counterValue}</h2>
        </div>
    );
};

export default App9;
