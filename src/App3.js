/*
클래스 컴포넌트를 통한 에러 처리
*/
import React from 'react';
import ErrorBoundary from 'ErrorBoundary';

class Message extends React.Component {
  render() {
    throw new Error('에러 발생!!'); // 에러 강제호출
    return <div>Message Component</div>;
  }
}

class App3 extends React.Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Message />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App3;
