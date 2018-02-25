import * as React from 'react';
import logger from '../decorators/logger';
const log = logger(process.env.NODE_ENV === 'development');

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      obj: {
        inner: {
          value: "",
        }
      }
    }
  }

  onChange = (e) => {
    this.setState(
      {
        message: e.target.value,
        obj: {
          inner: {
            value: e.target.value
          }
        }
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
