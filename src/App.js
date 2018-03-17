import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    window.$(this.refs.list).fadeOut();
  }
  countdown=()=> {
    var now = new Date();
    var eventDate = new Date(2018, 9, 1);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var seconds = Math.floor(remTime / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
  componentDidMount(){
    setInterval(() => {
      this.countdown()
    }, 1000);
    const url = 'http://adevarul.ro/ex/yrssv2'
    const url2 ='http://www.brasovultau.ro/feed/';
    const textarea = document.getElementById('rss-part')
    // eslint-disable-next-line
    feednami.load(url)
        .then(feed => {
            textarea.value = ''
            console.log(feed)
            for (let entry of feed.entries) {
                textarea.value += `${entry.title}\n${entry.link}\n\n`
            }
        })
  }
  render() {
    return (
      <div>
        <div className="fullwidth colour1 clearfix">
          <div
            id="countdown"
            className="bodycontainer clearfix"
            data-uk-scrollspy="{cls:'uk-animation-fade', delay: 300, repeat: true}"
          >
            <div id="countdowncont" className="clearfix">
              <ul id="countscript">
                <li>
                  <span id="days" className="days">
                    00
                  </span>
                  <p>Days</p>
                </li>
                <li>
                  <span id="hours" className="hours">
                    00
                  </span>
                  <p>Hours</p>
                </li>
                <li className="clearbox">
                  <span id="minutes" className="minutes">
                    00
                  </span>
                  <p>Minutes</p>
                </li>
                <li>
                  <span id="seconds" className="seconds">
                    00
                  </span>
                  <p>Seconds</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="rss-part">

        </div>
      </div>
    );
  }
}

export default App;
