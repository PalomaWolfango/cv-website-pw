import React, { Component } from "react";
import Fade from "react-reveal";

class Avatar extends Component {
  render() {
    if (!this.props.data) return null;

    
    const profilepic = "images/" + this.props.data.image;

    return (
      <section id="avatar">
        <Fade duration={1000}>
        <div>
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
        </div>
        </Fade>
      </section>
    );
  }
}

export default Avatar;
