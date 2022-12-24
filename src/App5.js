/*
커스텀 Hook 만들기
*/
import React, { useState, useEffect } from 'react';

const useCurrentTime = () => {
    const [currentTime, setCurrentTime] = useState();

    useEffect(() => {
        const handler = setInterval(() => {
            const currentTime = new Date().toISOString().slice(11, 19);
            setCurrentTime(currentTime);
        }, 1000); // 1초마다 내용 갱신
        return () => clearInterval(handler); // 인터벌 삭제
    }, []);

    return currentTime;
};

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth); // 현재 화면너비 값 저장
        window.addEventListener('resize', onResize); // 이벤트 리스너 등록
        return () => window.removeEventListener('resize', onResize); // 이벤트 리스너 삭제
    }, []);

    return width;
};

// 고차 컴포넌트
const Message = ({ message }) => {
    const windowWidth = useWindowWidth();
    return (
        <div>
            {message} : {windowWidth}px
        </div>
    );
};

const App5 = () => {
    const currentTime = useCurrentTime();
    const message = 'hello message';
    return (
        <div>
            <h1>현재시각</h1>
            {currentTime}
            <hr />
            <Message message={message} />
        </div>
    );
};

export default App5;
