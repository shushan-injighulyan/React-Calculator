import React, {Component} from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }

  addToInput = val => {
    (this.state.input === "0") ? this.setState({input: val}) :  this.setState({input: this.state.input + val})
  };

  addDecimal = val => {
    (this.state.input.indexOf(".") === -1 && this.state.input !== "") ?
        this.setState({input: this.state.input + val}) :
        this.setState({input: this.state.input})
  };

  clearInput = () => {
    this.setState({input: ""})
  };

  add = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator:  "add",
    })
  };

  subtract = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator:  "subtract",
    })
  };

  multiply = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator:  "multiply",
    });
  };

  divide = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator:  "divide",
    });
  };

  percent = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator:  "percent",
    });
  };

  opposite = () => {
    if(this.state.input !=="") {
      this.setState({
        input: String((Number(-(this.state.input)))),
      });
    }
  };

  remove = () => {
    if(this.state.input.length === 2 && Number(this.state.input) < 0) {
      this.setState({
        input: "",
      });

    }else {
      this.setState({
        input: this.state.input.slice(0, this.state.input.length - 1),
      });
    }
  };


  count = () => {
    this.state.currentNumber = this.state.input;
    if (this.state.operator === "add") {
        this.setState({
          input: Number(this.state.previousNumber) +
              Number(this.state.currentNumber)
        }
      );
      console.log(parseInt(this.state.previousNumber));
      console.log(parseInt(this.state.currentNumber));
    } else if (this.state.operator === "subtract"){
      this.setState({
            input: Number(this.state.previousNumber) -
                Number(this.state.currentNumber)
          }
      );
    } else if (this.state.operator === "multiply"){
      this.setState({
            input: Number(this.state.previousNumber) *
                Number(this.state.currentNumber)
          }
      );
    } else if (this.state.operator === "divide"){
      this.setState({
            input: Number(this.state.previousNumber) /
                Number(this.state.currentNumber)
          }
      );
    } else if (this.state.operator === "percent"){
      this.setState({
            input: (Number(this.state.currentNumber) *
                Number(this.state.previousNumber)) / 100
          }
      );
    }
  };



  render() {
    return (
        <div className="App">
          <div className="calculator-wrapper">
            <div className="row">
              <Input>{this.state.input}</Input>
            </div>
            <div className="row">
              <Button handleClick={this.clearInput}>c</Button>
              <Button handleClick={this.remove}> &#8656;</Button>
              <Button handleClick={this.percent}>%</Button>
              <Button handleClick={this.divide}>/</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>7</Button>
              <Button handleClick={this.addToInput}>8</Button>
              <Button handleClick={this.addToInput}>9</Button>
              <Button handleClick={this.multiply}>*</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>4</Button>
              <Button handleClick={this.addToInput}>5</Button>
              <Button handleClick={this.addToInput}>6</Button>
              <Button handleClick={this.subtract}>-</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>1</Button>
              <Button handleClick={this.addToInput}>2</Button>
              <Button handleClick={this.addToInput}>3</Button>
              <Button handleClick={this.add}>+</Button>
            </div>
            <div className="row">
              <Button handleClick={this.opposite}>+/-</Button>
              <Button handleClick={this.addToInput}>0</Button>
              <Button handleClick={this.addDecimal}>.</Button>
              <Button handleClick={this.count}>=</Button>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
