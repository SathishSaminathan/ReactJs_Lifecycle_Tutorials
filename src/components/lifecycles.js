import React, { PureComponent } from "react";

class LifeCycles extends PureComponent {
  //1 get default props

  //2 set default state
  state = {
    title: "LifeCycles"
  };

  //3 before render
  componentWillMount() {
    console.log("3 before render...componentWillMount");
    // document.querySelector('h3').style.color="red" it won't work because this is called before the render so the "h3" tag is not available in the DOM
  }

  //5 after render
  componentDidMount() {
    console.log("5 after render...componentDidMount");
    document.querySelector("h3").style.color = "red"; // it will work because this is called after the render
  }

  // Before getting Updated
  componentWillUpdate() {
    console.log("Before Update...componentWillUpdate");
  }

  // After getting Updated
  componentDidUpdate() {
    console.log("After Update...componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "Should Component Update???....",
      nextState.title !== this.state.title
    );
    
    /** it will get called if there is any update like if there is any state changes,
     *  if it returns true,
     *  then it will proceed to "componentWillUpdate(), componentDidUpdate()" functions
     **/

    if (nextState.title !== this.state.title) {
      return true;
    } else {
      return false;
    }
  }

  // When receiving new props or getting called again
  componentWillReceiveProps() {
    console.log("When the Component re-renders....componentWillReceiveProps"); // it will get called when the same component re-renders or getting new props
  }

  // While leaving this component
  componentWillUnmount() {
    console.log("Unmounted...componentWillUnmount"); // it will called when we going out of the component
  }

  // 4 render
  render() {
    console.log("4 render...");
    return (
      <div>
        <h3>{this.state.title}</h3>
        <div
          onClick={() =>
            this.setState({
              title: "Something Else..."
            })
          }
        >
          Click to Change the state...
        </div>
      </div>
    );
  }
}

export default LifeCycles;
