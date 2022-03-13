import React, { Component } from "react";
import arrow from "./arrow.svg";

export default class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
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
            <img style={{ border: "none" }} src={arrow} alt="Go to top" />
          </div>
        )}
      </div>
    );
  }
}
