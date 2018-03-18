import React from "react";
import "./App.css";
import "./carousel.css";

var feed={
  entries:[
    {"rss:title":'PlaceHolder'},
    {"rss:title":'PlaceHolder'},
    {"rss:title":'PlaceHolder'}
  ]
};
class App extends React.Component {
  constructor(props) {
    super(props);
    window.$(this.refs.list).fadeOut();

  }
  countdown = () => {
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
  };
  componentDidMount() {
    setInterval(() => {
      this.countdown();
      const url = "http://adevarul.ro/ex/yrssv2";
    const url2 = "http://www.brasovultau.ro/feed/";
    const textarea = document.getElementById("rss-part");
    // eslint-disable-next-line
    feednami.load(url2).then(rssfeed => {
      feed=rssfeed;
      textarea.value = "";
      console.log(rssfeed);
      console.log(rssfeed.entries['0']['rss:title']);
      for (let entry of rssfeed.entries) {
        textarea.value += `${entry.title}\n${entry.link}\n\n`;
      }
    });
    }, 1000);
    
  }
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Numaratoare
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Cuvantari
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Detalii
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
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
        <div id="rss-part" />
        <div>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#myCarousel" data-slide-to="1" className="" />
              <li data-target="#myCarousel" data-slide-to="2" className="" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="first-slide"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                  alt="First slide"
                />
                <div className="container">
                  <div className="carousel-caption text-left">
                    <h2>
                      Am auzit ca mancarea la cantina acolo e foarte scumpa si
                      are gust oribil - Un coleg ingrijorat
                    </h2>
                    <p>
                      <a
                        className="btn btn-lg btn-primary"
                        href="#"
                        role="button"
                      >
                        Afla mai multe
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="second-slide"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                  alt="Second slide"
                />
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Nou loc o sa fie atat de departe incat o sa trebuiasca sa merg cu autobuzul la munca dimineata - Un coleg caruia ii place sa mearga pe jos dimineata</h1>
                    <p>
                      <a
                        className="btn btn-lg btn-primary"
                        href="#"
                        role="button"
                      >
                        Afla mai multe
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="third-slide"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                  alt="Third slide"
                />
                <div className="container">
                  <div className="carousel-caption text-right">
                    <h1>Dimineata si dupa amiaza se formeaza intotdeauna ambuteiaje in cartierul ala - Un vitor coleg care o sa mearga cu autobuzul</h1>
                    <p>
                      <a
                        className="btn btn-lg btn-primary"
                        href="#"
                        role="button"
                      >
                        Afla mai multe
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#myCarousel"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#myCarousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="album py-5 bg-light">
        <div className="container">

          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <div className="card-body">
                  <p className="card-text">{feed.entries['0']['rss:title']}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <div className="card-body">
                  <p className="card-text">{feed.entries['1']['rss:title']}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <div className="card-body">
                  <p className="card-text">{feed.entries['1']['rss:title']}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>


    );
  }
}

export default App;
