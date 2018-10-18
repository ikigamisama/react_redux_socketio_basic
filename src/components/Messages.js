import React from 'react'
import PropTypes from 'prop-types';


const Messages = ({message,author}) => (
    <p>
        <i>{author}</i>: {message}
    </p>
)


Messages.PropTypes = {
    message:PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired
}

export default Messages;