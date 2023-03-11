import React, { Component } from 'react';
class ProgressDIY extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
    }
    console.log('%c ProgressDIY', 'background: red; color: white');


    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    console.log('%c increase', 'background: red; color: white');

    const percent = this.state.percent + 1;
    this.setState({ percent }, () => {
      if (this.state.percent >= this.props.value) {
        return;
      }
      this.tm = setTimeout(this.increase, 20);
    });
  }

  decrease() {
    console.log('%c decrease', 'background: red; color: white');

    const percent = this.state.percent - 1;
    this.setState({ percent }, () => {
      if (this.state.percent <= this.props.value) {
        return;
      }
      this.tmTwo = setTimeout(this.decrease, 20);
    });
  }


  componentDidMount() {
    console.log('%c componentDidMount', 'background: red; color: white');

    this.setState({ percent: this.props.value })
  }


  componentDidUpdate(prevProps, prevState) {
    console.log('%c componentDidUpdate', 'background: red; color: white');

    if (prevProps.value > this.props.value) {
      if (this.tm)
        clearTimeout(this.tm);
      this.decrease();
    }
    else if (prevProps.value < this.props.value) {
      if (this.tmTwo)
        clearTimeout(this.tmTwo);
      this.increase();
    }
  }

  render() {
    console.log('%c render', 'background: red; color: white');

    return (
      <div>
        <div className="progress-back" style={{ backgroundColor: "rgba(0,0,0,0.2)", width: "200px", height: "7px", borderRadius: "10px" }}>
          <div className="progress-bar" style={{ backgroundColor: "#fe5196", width: this.state.percent.toString() + "%", height: "100%", borderRadius: "10px" }}></div>
        </div>
        目前比率: {this.state.percent}%
        <button value={90} onClick={this.props.onClick}>增加比率至90</button>
        <button value={10} onClick={this.props.onClick}>減少比率至10</button>
      </div>
    );
  }
}
export default ProgressDIY;