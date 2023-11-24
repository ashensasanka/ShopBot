import React from 'react'
import Image from '../../src/assets/chaticon.png';
import { ChatDots, Person } from 'react-bootstrap-icons'

export default function ChatMessage(props) {
    return (
        <div className={`d-flex ${props.user && 'justify-content-end'}`}>
            {
                props.user ? (
                    <span className="message-right d-flex">
                        <span className="message-text">{props.message}</span>
                        <Person className="message-icon"/>
                    </span>
                ) :
                    <span className="message-left d-flex">
                        <img src={Image} className="message-icon"/>
                        <span className="message-text">{props.message}</span>
                    </span>
            }
        </div>
    )
}
