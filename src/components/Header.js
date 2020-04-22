import PropTypes from 'prop-types'
import React from 'react'
import wave from '../images/memojiwave.png'


const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo backgroundBlur">
      <img src={wave} className="heroImage"/>
    </div>
    <div className="content">
      <div className="inner backgroundBlur">
        <h1 style={{paddingLeft: '0.5rem'}}>Emmanuel Freddy</h1>
        <p style={{marginBottom: '0'}}>Software Engineer - Growth</p>
        <p>Toronto, Canada</p>
      </div>
    </div>
    <nav>
      <ul className={'backgroundBlur'}>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            My Work
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
        {/*<li style={{marginTop:0}}>*/}
        {/*  <AniLink fade to="timeline" style={{ borderBottom: 'none' }}>*/}
        {/*    <button>*/}
        {/*      Timeline*/}
        {/*    </button>*/}
        {/*  </AniLink>*/}
        {/*</li>*/}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
