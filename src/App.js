/*
CSS를 적용하는 다양한 방법 (sass 활용)
*/
import React from 'react';
import Profile from 'Profile';
import Message from 'Message';
import 'App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Profile />
                <Message />
            </div>
        );
    }
}

export default App;
