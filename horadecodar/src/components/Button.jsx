import PropTypes from 'prop-types'

function Button({text, event}) {
  return(
    <>
      <button onClick={event} >{text}</button>
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button