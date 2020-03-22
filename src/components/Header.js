import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import wave from '../images/memojiwave.png'


const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo backgroundBlur">
      <img src={wave} style={{maxWidth: 90, maxHeight: 100, position: 'relative', top: "-24px", right: '4px'}}/>
    </div>
    <div className="content">
      <div className="inner backgroundBlur">
        <h1>Emmanuel Freddy</h1>
        <p>
          Software Engineer - Growth
        </p>
        <p>
          Toronto
        </p>
      </div>
    </div>
    <nav>
      <ul className={'backgroundBlur'}>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
