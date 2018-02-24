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
  componentWillMount() {

  }

  @log
  componentDidMount() {

  }

  @log
  componentWillReceiveProps() {

  }

  @log
  shouldComponentUpdate(nextProps, nextState) {
    return !nextState || nextState.message !== this.state.message;
  }

  @log
  componentWillUpdate() {

  }

  @log
  componentDidUpdate() {

  }

  @log
  componentWillUnmount() {

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
