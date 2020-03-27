import PropTypes from 'prop-types'
import React from 'react'
import toronto from '../images/toronto.jpg'
import edmonton from '../images/edmonton.jpg'

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
                <img src={toronto} alt="" />
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
                <img src={edmonton} alt="" />
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

          <p>
          </p>
          <p>
          </p>
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
          <span className="image main">
            <img src={toronto} alt="" />
          </span>
          <p>
          </p>
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
