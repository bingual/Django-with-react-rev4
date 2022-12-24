/*
리듀서와 useReducer 훅
*/

import React, { useReducer } from 'react';

// 오타 방지를 위해 상수에 input name 값 저장
const SET_NAME = 'setName';
const SET_AGE = 'setAge';

// 전달받은 값으로 조건부 로직 수행
const reducer = (prevState, action) => {
    const { type, value } = action;
    if (type === SET_NAME) return { ...prevState, myname: value };
    else if (type === SET_AGE) return { ...prevState, age: value };
};

const App6 = () => {
    // useReducer 첫번째인자로 reducer 라는 함수를 두번째로 초기화할 값을 받는다.
    const [state, dispatch] = useReducer(reducer, { myname: '', age: '' });
    const { myname, age } = state;
    const onChange = (e) => {
        const { name: type, value } = e.target;
        dispatch({ type, value }); // dispatch 호출시 내부적으로 reducer 호출
    };

    return (
        <div>
            myname : {myname}, age : {age}
            <input
                type="text"
                name="setName"
                placeholder="이름입력"
                onChange={onChange}
            />
            <input
                type="text"
                name="setAge"
                placeholder="나이입력"
                onChange={onChange}
            />
        </div>
    );
};

export default App6;
