import React from "react";

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      color: 'off'
     };
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({ counter: this.state.counter += 1 })
    const clickCount = this.state.counter;
    if (clickCount === 3) {
      this.setState({ color: 'lvl-1' });
    } else if (clickCount === 6) {
      this.setState({ color: 'lvl-2' });
    } else if (clickCount === 9) {
      this.setState({ color: 'lvl-3' });
    } else if (clickCount === 12) {
      this.setState({ color: 'lvl-4' });
    } else if (clickCount === 15) {
      this.setState({ color: 'lvl-5' });
    } else if (clickCount === 18) {
      this.setState({ color: 'lvl-6' });
    }
  }
  render() {
    console.log(this.state)
    return (
      <button onClick={this.handleClick} className={this.state.color}>Hot Button</button>
    );
  }
}
