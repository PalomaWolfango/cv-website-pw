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
        <div className="text-presentation">
          <h2>Hi,</h2>
          <h4>I'm <a style={{color: '#e65100'}}>Paloma Wolfango</a> !</h4>
        </div>
        
        </Fade>
      </section>
    );
  }
}

export default Avatar;
