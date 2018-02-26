import * as React from 'react';
import {render} from 'react-dom';
import MyComponent from './components/MyComponent';
import Log from 'react-log-decorator';
const log = Log(true);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
  }

  updateMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  };

  @log
  render() {
    return (
      <MyComponent message={this.state.message} onChange={this.updateMessage}/>
    )
  }
}

render(<App/>, document.getElementById("root"));
