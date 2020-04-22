import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <a href="https://www.linkedin.com/in/efreddy/">
          <span className="icon fa-linkedin-square" style={{marginRight: '0.3rem'}}/>
          Say Hello
          <span>👋</span>
        </a>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
