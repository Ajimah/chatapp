//import React from 'react'
import {ChatBubbleLeftRightIcon, PhoneIcon} from "@heroicons/react/24/solid"

import PropTypes from 'prop-types';


const CustomHeader =  ({chat}) => {
        console.log("chat.description", chat.description)
    return (<div className='chat-header'>
        <div className='flexbetween'>
            <ChatBubbleLeftRightIcon className='icon-chat' />
            <h3 className='header-text'>{chat.title}</h3>
        </div>
        <div className='flexbetween'>
                <PhoneIcon className='icon-phone' />
                <p className='header-text'>{chat.description}</p>
        </div>
    </div>
 )
}

CustomHeader.propTypes = {
    chat: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };

export default CustomHeader