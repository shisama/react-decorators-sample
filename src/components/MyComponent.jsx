import * as React from 'react';
import logger from 'react-log-decorator';
import Message from './Message';
const log = logger(process.env.NODE_ENV === 'development');

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message_info: {
        length: 0,
      }
    }
  }

  onChange = (e) => {
    this.props.onChange(e);
    this.setState(
      {
        message_info: {
          length: e.target.value.length
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
        <Message message={this.props.message}/>
      </div>
    )
  }
}
