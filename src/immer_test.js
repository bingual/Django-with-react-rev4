/*
immer를 활용한 손쉬운 불변객체 다루기
*/
const { produce } = require('immer');

const baseState = [
    {
        todo: 'Learn typescript',
        done: true,
    },
    {
        todo: 'Try immer',
        done: false,
    },
];

/*
baseState 두번째 object의 done을 false로 만들고
todo: 'Tweet about in!' 내용이 들어가는 
새로운 오브젝트를 마지막에 추가해보시오.
*/

// 기본 문법
const newState1 = [
    // baseState 내용을 전개후 object 단위로 순회
    ...baseState.map((tweet, index) =>
        index === 1 ? { ...tweet, done: true } : tweet,
    ),
    { todo: 'Tweet about in!' },
];

// immer 사용
const newState2 = produce(baseState, (draft) => {
    draft[1].done = true;
    draft.push({ todo: 'Tweet about in!' });
});

console.log(newState1);
