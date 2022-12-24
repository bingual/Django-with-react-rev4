import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
        error: null,
    };

    componentDidCatch(error, errorInfo) {
        // 그룹화 하여 가독성 향상
        console.group('componentDidCatch');
        console.log(error);
        console.log(errorInfo);
        console.groupEnd();
    }

    // 자식 컴포넌트에서 에러가 발생했을시 호출
    static getDerivedStateFromError(error) {
        return { error }; // error 상태 값 변경
    }

    render() {
        const { error } = this.state;
        if (error !== null) {
            return (
                <div>
                    <h2>Something went wrong!</h2>
                    <div>{error.toString()}</div>
                </div>
            );
        } else return this.props.children;
    }
}

export default ErrorBoundary;
