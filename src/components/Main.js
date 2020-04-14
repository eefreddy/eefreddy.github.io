import PropTypes from 'prop-types';
import React from 'react';
import cozumel from '../images/cozumel2.jpg';
import playa from '../images/playa.jpg';
import valladolid from '../images/valladolid.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import edmonton from '../images/edmonton.jpg';
import toronto from '../images/toronto.jpg';
import { Carousel } from 'react-responsive-carousel';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }
  escFunction(event){
    if(event.keyCode === 27) {
      this.props.onCloseArticle()
    }
  }

  componentDidMount () {
    document.addEventListener("keydown", this.escFunction, false);
  }

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {this.props.onCloseArticle()}}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <div className="grid-container">
            <div className="grid-item">
              <span className="image fit fit-zero">
                <div style={{position: 'relative', textAlign: 'center', color: 'black'}}>
                  <img src={toronto} alt="" />
                  <p style={{position: 'absolute', top: '8px', left: '16px'}}>Mar 2019 - Present</p>
                </div>
                <h5>Software Engineer - Growth Toronto, Canada</h5>
              </span>
            </div>
            <div className="grid-item article-text article-text-right">
              <p>
                As a member of the Growth team at Jobber,
                I leverage data, cross functional experimentation and engineering to identify areas of high growth for the company.
              </p>
              <p>
                On this team I've learnt I've learnt about the company's acquisition channels, growth levers and the bottlenecks.
              </p>
              <p>
                In my role, I work with technologies like Rails, React, PostgreSQL and
                Javascript; and I use Amplitude and Inspectlet to gain insight into user behaviour.
              </p>
            </div>
            <div className="grid-item">
              <span className="image fit fit-zero">
                <div style={{position: 'relative', textAlign: 'center', color: 'black'}}>
                  <img src={edmonton} alt="" />
                  <p style={{position: 'absolute', top: '8px', left: '16px'}}>Oct 2017 - Mar 2019</p>
                </div>
                <h5>Software Engineer | Edmonton, Canada</h5>
              </span>
            </div>
            <div className="grid-item article-text article-text-right">
              <p>
                As an engineer on a scrum team,
                I was responsible for making customer requirements into product features,
                identifying improvable workflows and
                build new features that are critical to business growth.
              </p>
              <p>
                I learnt how to run scrum meetings, work as part of an agile team, iteratively build features and work with designers to understand the nuances of intuitive product design.
              </p>
            </div>
          </div>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <div className="grid-container" style={{gridTemplateColumns: 'none'}}>
            <div className="grid-item">
              <div style={{position: 'relative', textAlign: 'center', color: 'white'}}>
                <span className="image fit fit-zero">
                  <img src={cozumel} style={{maxWidth:'50%', maxHeight:'50%', borderRadius:'5%', margin:'auto'}} alt="me" />
                </span>
              </div>
            </div>
            <div className="grid-item article-text" style={{paddingTop: '1rem'}}>
              <p>
                Hi, I'm a self taught software engineer from Chennai (<span style={{fontSize:'1.3rem', verticalAlign:'top'}}>🇮🇳</span>).
                I grew up in Ipswich (<span style={{fontSize:'1.3rem', verticalAlign:'top'}}>🇬🇧</span>) and got my undergraduate degree in
                Electrical Engineering in Edmonton (<span style={{fontSize:'1.3rem', verticalAlign:'top'}}>🇨🇦</span>).
              </p>
              <p>
                I'm always up for meeting new people, talking about new ideas, opportunities, and drinking some tea! ☕️
              </p>

              <a href="https://www.linkedin.com/in/emmanuel-freddy/" style={{borderBottom:'none'}}>
                <button>
                  <span className="icon fa-linkedin-square" style={{marginRight: '0.3rem'}}/>
                  Say Hello 👋
                </button>
              </a>
            </div>
          </div>

          {/*<Carousel showThumbs={false} emulateTouch={true} showStatus={false}>*/}
          {/*  */}
          {/*  <div>*/}
          {/*    <img src={playa} />*/}
          {/*    <p style={{position: 'absolute', bottom: '8px', right: '16px'}}>Mar 2019 - Present</p>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <img src={valladolid} />*/}
          {/*    <p style={{position: 'absolute', bottom: '8px', right: '16px'}}>Mar 2019 - Present</p>*/}
          {/*  </div>*/}
          {/*</Carousel>*/}
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
