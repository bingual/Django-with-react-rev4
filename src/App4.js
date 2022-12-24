/*
함수 컴포넌트와 필수 Hook
*/

import React, { useCallback, useEffect, useState } from 'react';

function PostDetailComponent({ post }) {
    const { title, content } = post;
    return (
        <div>
            <h1>{title}</h1>
            {content}
        </div>
    );
}

function PostDetail({ postId }) {
    const [post, setPost] = useState();

    useEffect(() => {
        setPost({
            title: '포스팅 제목',
            content: `...포스팅 내용 : ${postId}`,
        });
    }, [postId]);

    return (
        <div>
            {!post && '...로딩중'}
            {post && <PostDetailComponent post={post} />}
        </div>
    );
}

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const instance = setInterval(() => setDate(new Date()));
        return () => clearInterval(instance); // 반드시 언마운트 작업 필요
    }, []);

    return <div>{date.toISOString().slice(11, 19)}</div>;
}

function App4() {
    const [value, setValue] = useState({ value1: 0, value2: 0 });
    const [postId, setPostId] = useState(1);

    // commit후에 mount 단계일때 실행(한번만 실행)
    useEffect(() => console.log('mount logic#1'), []);

    // 지정한 값의 변경사항이 있을때 마다 실행
    useEffect(
        () => console.log(`change value : ${JSON.stringify(value)}`),
        [value],
    );

    // 함수를 재활용하여, 불필요한 컴포넌트 재렌더링을 제거하기
    const onClick = useCallback(() => {
        setValue((prevState) => ({
            ...prevState,
            value1: prevState.value1 + 1,
        }));
    }, []);

    return (
        <div>
            <Clock />
            Hello App4
            <hr />
            {JSON.stringify(value)}
            <button onClick={onClick}>Click</button>
            <hr />
            <button onClick={() => setPostId(100)}>100글 보기</button>
            <PostDetail postId={postId} />
        </div>
    );
}

export default App4;
