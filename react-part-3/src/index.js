import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
 

 
const Removeall = ({ handleRemoveTodoItemAll, handleViewTodoItemAll }) => {
  return (
    <div className='inline-item'>
      <button className='btn btn-success btn-sm float-right' onClick={handleRemoveTodoItemAll}>
        REMOVE ALL ITEM
      </button>
      <button className='btn btn-warning btn-sm float-right' onClick={handleViewTodoItemAll}>
        ADD ALL ITEM
      </button>
    </div>
  );
};
 
const TodoListItem = ({ text, count, handleRemoveTodoItem }) => {
  return (
    <li className='list-group-item'>
      <div className='inline-item'>
        <h1>
          {count}. {text}
        </h1>
        <button onClick={() => handleRemoveTodoItem(text)} className='btn btn-info btn-sm'>
          Remove Item
        </button>
      </div>
    </li>
  );
};

 
const TodoList = ({ todo, handleRemoveTodoItem }) => {
  return (
    <div>
      {todo.length === 0 ? (
        <p className='text-danger'>YOUR ITEM IS EMPTY. Please ADD NEW ITEM</p>
      ) : (
        <h1 className='text-warning text-center'>Todo List</h1>
      )}
      <ul className='list-group'>
        {todo.map((todoItem, index) => (
          <TodoListItem
            handleRemoveTodoItem={handleRemoveTodoItem}
            count={index + 1}
            key={index}
            text={todoItem}
          />
        ))}
      </ul>
    </div>
  );
};

 
const Header = ({ title, subtitle }) => {
  return (
    <div className='text-center'>
      <h1 className='text-info'>{title}</h1>
      <h2 className='text-success'>{subtitle}</h2>
    </div>
  );
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ['React', 'Vue', 'Angular', 'Flutter']
    };
    this.handleRemoveTodoItem = this.handleRemoveTodoItem.bind(this);
    this.handleRemoveTodoItemAll = this.handleRemoveTodoItemAll.bind(this);
    this.handleViewTodoItemAll = this.handleViewTodoItemAll.bind(this);
  }

  handleRemoveTodoItem(removeItem) {
    const updatedTodo = this.state.todo.filter((td) => td !== removeItem);
    this.setState({
      todo: updatedTodo
    });
  }

  handleRemoveTodoItemAll() {
    this.setState({
      todo: []
    });
  }

  handleViewTodoItemAll() {
    this.setState({
      todo: ['React', 'Vue', 'Angular', 'Flutter']
    });
  }

  
  render() {
    return (
      <div  >
     
            <Header title='Todo App' subtitle='Manage your tasks' />
            <div className='row'>
              <div className='col-lg-12'>
                <TodoList todo={this.state.todo} handleRemoveTodoItem={this.handleRemoveTodoItem} />
              </div>
              <div className='col-lg-12'>
                <Removeall
                  handleRemoveTodoItemAll={this.handleRemoveTodoItemAll}
                  handleViewTodoItemAll={this.handleViewTodoItemAll}
                />
              </div>
            </div>
          </div>
        
    );
  }
}

 
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>Counter  </h1>
        <p>Count: {this.state.count}</p>
        <button className='btn btn-primary mr-2' onClick={this.incrementCount}>
          Increment
        </button>
        <button className='btn btn-danger' onClick={this.decrementCount}>
          Decrement
        </button>
      </div>
    );
  }
}

// Additional Example: Random Number Generator Component
class RandomNumberGenerator extends Component {
  generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 100);
    alert(`Random Number: ${random}`);
  };

  render() {
    return (
      <div>
        <h1>Random Number Generator</h1>
        <button className='btn btn-success' onClick={this.generateRandomNumber}>
          Generate 
        </button>
      </div>
    );
  }
}

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Text Input  </h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={this.state.inputText}
            onChange={this.handleInputChange}
          />
        </div>
        <p>Input Value: {this.state.inputText}</p>
      </div>
    );
  }
}



class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    };
  }

  changeColor = () => {
    const colors = ['red', 'green', 'blue', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ color: randomColor });
  };

  render() {
    const { color } = this.state;

    return (
      <div>
        <h1 style={{ color }}>Color Changer</h1>
        <button className='btn btn-info' onClick={this.changeColor}>
          Change Color
        </button>
      </div>
    );
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      result: 0
    };
  }

  handleNumChange = (event, num) => {
    this.setState({ [num]: Number(event.target.value) });
  };

  calculateSum = () => {
    const { num1, num2 } = this.state;
    const result = num1 + num2;
    this.setState({ result });
  };

  render() {
    const { num1, num2, result } = this.state;

    return (
      <div>
        <h1>Simple Calculator</h1>
        <div>
          <input type="number" value={num1} onChange={(e) => this.handleNumChange(e, 'num1')} />
          <span> + </span>
          <input type="number" value={num2} onChange={(e) => this.handleNumChange(e, 'num2')} />
          <button className='btn btn-success' onClick={this.calculateSum}>
            Calculate
          </button>
        </div>
        <p>Result: {result}</p>
      </div>
    );
  }
}
// Rendering Additional Examples
const root = document.getElementById('root');

ReactDOM.render(
  <div className='container mt-5'>
        <div className='card gx-5'>
          <div className='card-body'>

    <Calculator />
    <ColorChanger/>
    <TextInput />
    <Counter />
    <RandomNumberGenerator />
    <Main />
  </div>
  </div>


  </div>,
   root
);