import React, { Component } from "react";
import "./mouseHover.css";

class MouseHover extends Component {
  state = {
    stars: [1, 2, 3, 4, 5],
    starIndex: null
  };

  displayStar = () => {
    let starTemPlate = [];
    // this.state.stars.map(star, index => {
    //   starTemPlate.push(
    //     <span onMouseEnter={() => alert(index)}>
    //       <i class="fas fa-star" />
    //     </span>
    //   );
    // });

    for (let i = 1; i <= this.state.stars.length; i++) {
      starTemPlate.push(
        <span key={i}
          className={`${i <= this.state.starIndex && "active"}`}
          onMouseEnter={() => this.setState({ starIndex: i },()=> console.log("this.state.starIndex..", this.state.starIndex))}
        >
          <i className="fas fa-star star_styles" />
        </span>
      );
    }
    return starTemPlate;
  };

  render() {
    const { stars } = this.state;

    return <React.Fragment>{this.displayStar()}</React.Fragment>;
  }
}

export default MouseHover;
