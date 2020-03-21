import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <a href="https://www.linkedin.com/in/emmanuel-freddy/">
          <span className="icon fa-linkedin-square"/> Hit me up
        </a>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
