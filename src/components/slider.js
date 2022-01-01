import React, { Component } from "react";

class Slider extends Component {
  state = {
    randomImageUrl: "https://picsum.photos/200",
    imageUrl: "https://wallpaperaccess.com/full/343619.jpg",
    videoUrl: "https://www.youtube.com/embed/mOSKUd3LkjI",
  };

  render() {
    return (
      <div className="jb-slider">
        {/* chart */}
        <div id="chartdiv"></div>
      </div>
    );
  }
}

export default Slider;
