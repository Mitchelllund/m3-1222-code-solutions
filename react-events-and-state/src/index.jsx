import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = { isClicked: false };
  }
  handleClick() {
    this.setState({ isClicked: true })
  }
    render() {
      const isClicked = this.state.isClicked;
      let button;
      if (isClicked) {
        button = <button onClick={this.handleClick.bind(this)}>Thanks!</button>
      } else {
        button = <button onClick={this.handleClick.bind(this)}>Click Me!</button>
      }
    return button;
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton/>);
