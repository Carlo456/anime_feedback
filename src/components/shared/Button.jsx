import React from 'react'
import PropTypes from 'prop-types'


const Button = ({version, type, isDisabled }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        Send
    </button>
  )
}

Button.defaultProps ={
    version: 'primary',
    type: 'button',
    isDisabled: false
}

Button.propTypes = {
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}
export default Button