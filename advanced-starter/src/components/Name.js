// todo: make more exciting with css chain animations
// -webkit-animation: First 1s, Second 2s;
// https://stackoverflow.com/questions/7825509/css3-chain-animations

import React from "react";
import "./Name.css";
class Name extends React.Component {
  componentDidMount() {
    // var isOn = true;
    // var numMids = 30;
    // const parent = ReactDOM.findDOMNode(this);
    // var start = function(el, i) {
    //   el.style["margin-top"] = i * 10 + "px";
    //   el.childNodes[0].style["top"] = -i + "px";
    //   // el.className = "mid on"
    // };
    // var end = function(el, i) {
    //   // el.className = "mid on"
    //   el.style["margin-top"] = i * i + "px";
    //   el.childNodes[0].style["top"] = -i * i + "px";
    // };
    // mids.forEach(start);
    // var go = function() {
    //   mids.forEach(end);
    // };
    // var delayVal = 20;
    // setInterval(() => {
    //   console.log("update1");
    //   this.forceUpdate();
    // }, 10000);
  }
  componentWillUnmount() {
    // const parent = ReactDOM.findDOMNode(this);
    // $(parent).slider("destroy");
  }
  shouldComponentUpdate() {
    console.log("update2");
    // return false;
  }
  render() {
    let delayVal = 1000 * Math.random();
    let arr = new Array(this.props.num).fill(this.props.num);
    let text = "MICHAEL JACOBS";
    return arr.map((e, i) => (
      <h1
        className="animtext"
        style={{
          transitionDuration: i * Math.sin(i / delayVal) + "s",
          marginTop: i * (this.props.height / this.props.num)
        }}
      >
        <span
          style={{
            animationDelay:
              (i * Math.sin((i / delayVal) * this.props.num)) / (2 * i + 1) +
              "s"
          }}
        >
          {text}
        </span>
      </h1>
    ));
  }
}
export default Name;
