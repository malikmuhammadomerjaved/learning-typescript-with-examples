import { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

//if we don't have props then we can write {} instead of props
//if we don't have state then we can remove state
// we-write as <{}>
export class ClassCounter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((st) => ({
      count: st.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
