import React from "react";
import afterPhoto from './../images/after.png';
import beforePhoto from './../images/before.png';


class AfterBefore extends React.Component {
  render() {
    return (
      <div class="container">
          <p>Am ales la intamplare un loc din Steagul de unde multi dintre colegi nostri pleaca zilnic la munca</p>
        <div class="row">
          <div class="col-md-6">
            <a href="#">
              <img  class="img-responsive" src={afterPhoto} alt="inn_logo" />
            </a>
          </div>
          
          <div class="col-md-6">
            <a href="#">
              <img  class="img-responsive" src={beforePhoto} alt="ccs_logo" />
            </a>
          </div>
        </div>
        <p>Se poate observa o crestere de minim 15 minute dus deci 30 de minute zilnic pentru colegii ce vin dimineata pe jos la munca</p>
      </div>
    );
  }
}

export default AfterBefore;
