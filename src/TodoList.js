import React from 'react';
import { Input, List } from 'antd';
import { produce } from 'immer';

// const TodoItem = ({ todo }) => <li>{todo}</li>;

class TodoList extends React.Component {
  state = {
    todoList: ['파이썬 익히기', '장고 익히기'],
    current: '',
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({ current: value });
  };

  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.setState(
        produce((draft) => {
          const current = draft.current.trim();
          if (current.length > 0) {
            draft.current = '';
            draft.todoList.push(current);
          }
        }),
      );
    }

    // if (e.keyCode === 13) {
    //   const { todoList, current } = this.state;
    //   if (current.trim().length > 0) {
    //     this.setState({ current: '', todoList: [...todoList, current.trim()] });
    //   }
    // }
  };

  render() {
    return (
      <div style={{ width: '300px', margin: '30px auto' }}>
        <List
          header={'Todo List'}
          dataSource={this.state.todoList}
          bordered={true}
          renderItem={(todo) => <List.Item>{todo}</List.Item>}
          style={{ marginBottom: '4px' }}
        />
        <Input
          type={'text'}
          placeholder={'할일을 입력하세요.'}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={this.state.current}
        />

        {/* <ul>
          {this.state.todoList.map((todo, index) => (
            <TodoItem key={index} todo={todo} />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={this.state.current}
        /> */}
      </div>
    );
  }
}

export default TodoList;
