import React, { Component } from 'react';

const App = () => (<Counter />)

// componentを継承してないとエラーになるので注意する
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { 'count': 0};
  };

  handlePlusButton = () => {
    const currentCount = this.state.count;
    this.setState({ 'count' : currentCount + 1 });
  }

  handleMinusButton = () => {
    const currentCount = this.state.count;
    this.setState({ 'count' : currentCount - 1 });
  }

  render() {
    return (
    // return するjsxは親が1つでなければならないという制約があるため、fragmentで囲む。
    // handlePlusButtonに()をつけて呼び出すとエラーになった。
    <React.Fragment>
    <div>count number is　{this.state.count}</div>
    <button onClick={this.handlePlusButton}>+1</button>
    <button onClick={this.handleMinusButton}>-1</button>
    </React.Fragment>
    );
  };
}


export default App;