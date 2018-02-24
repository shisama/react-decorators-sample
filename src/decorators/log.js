export default log;

function log(target, name, descriptor) {
  const func = descriptor.value;
  descriptor.value = function (...args) {
    console.log(this);
    console.log("  " + name);
    console.log("    props:" + JSON.stringify(this.props));
    console.log("    state:" + JSON.stringify(this.state));
    const [propsArg, stateArg] = args;
    switch (name) {
      case "componentWillReceiveProps":
        console.log("    nextProps:" + JSON.stringify(propsArg));
        break;
      case "shouldComponentUpdate":
      case "componentWillUpdate":
        console.log("    nextProps:" + JSON.stringify(propsArg));
        console.log("    nextState:" + JSON.stringify(stateArg));
        break;
      case "componentDidUpdate":
        console.log("    prevProps:" + JSON.stringify(propsArg));
        console.log("    prevState:" + JSON.stringify(stateArg));
        break;
    }
    return func.bind(this)(this.props);
  };
  return descriptor;
}