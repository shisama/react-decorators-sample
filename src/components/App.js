import * as React from 'react';
import log from '../decorators/log';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
  }

  onChange = (e) => {
    this.setState(
      {
        message: e.target.value
      }
    );
  };

  @log
  componentDidMount() {

  }

  @log
  shouldComponentUpdate(nextProps, nextState) {
    return !nextState || nextState.message !== this.state.message;
  }

  @log
  render() {
    return (
      <div>
        <input type="text" onChange = {this.onChange} />
        <p>{ this.state.message }</p>
      </div>
    )
  }
}
