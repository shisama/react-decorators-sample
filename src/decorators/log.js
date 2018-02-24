export default log;

function log(target, name, descriptor) {
  const func = descriptor.value;
  descriptor.value = function (...args) {
    console.log(this);
    console.log("  " + name);
    console.log("    props:" + JSON.stringify(this.props));
    console.log("    state:" + JSON.stringify(this.state));
    if (name === 'shouldComponentUpdate') {
      const [nextProps, nextState] = args;
      console.log("    nextProps:" + JSON.stringify(nextProps));
      console.log("    nextState:" + JSON.stringify(nextState));
    }
    return func.bind(this)(this.props);
  };
  return descriptor;
}
