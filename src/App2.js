/*
CSS를 적용하는 다양한 방법 (react 문법)
*/
import React from 'react';

// class Wrapper extends React.Component {
//   render() {
//     return (
//       <section style={{ padding: '4em', backgroundColor: 'papayawhip' }}>
//         {this.props.children}
//       </section>
//     );
//   }
// }

// class Title extends React.Component {
//   render() {
//     const fontSize = this.props.isBig ? '3em' : '1.5em';
//     return (
//       <h1 style={{ fontSize, textAlign: 'center', color: 'palevioletred' }}>
//         Title
//         <hr />
//         {this.props.children}
//       </h1>
//     );
//   }
// }

const Wrapper = (props) => {
    const styles = {
        padding: '4em',
        backgroundColor: 'papayawhip',
    };
    return <div style={styles}>{props.children}</div>;
};

const Title = (props) => {
    const styles = {
        fontSize: props.isBig ? '3em' : '1.5em',
        textAlign: 'center',
        color: 'palevioletred',
    };
    return <div style={styles}>{props.children}</div>;
};

function App2() {
    const componencts = <Title>Hello World!</Title>;
    return <Wrapper children={componencts} />;
}

export default App2;
