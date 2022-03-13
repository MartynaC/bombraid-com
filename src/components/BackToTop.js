import React, { Component } from "react";
import arrow from "./arrow.svg";

export default class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: true,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    this.setState({
      is_visible: true,
    });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-to-top">
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <img src={arrow} alt="Go to top" />
          </div>
        )}
      </div>
    );
  }
}
