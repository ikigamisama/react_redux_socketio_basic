import React from 'react'
import PropTypes from 'prop-types';


const AddMessage = (props) => {
    let input;
    return (
        <section id="new_messages">
            <input 
                onKeyPress={(evt) => {
                    if(evt.key === 'Enter'){
                        props.dispatch(input.value, 'Me')
                        input.value = '';
                    }
                }}
                type="text"
                ref={(node) => {
                    input = node;
                }}
            />
        </section>
    );
}


AddMessage.PropTypes = {
    dispatch:PropTypes.func.isRequired
}

export default AddMessage;