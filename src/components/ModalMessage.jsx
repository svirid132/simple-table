import React from 'react'
import Alert from './Alert'

function ModalMessage({title, message, textBtn, onAccept, onClose, className}) {

    const messageElem = <p>{message}</p>
    const btns = 
        <ul data-count="multiple">
            <li><button onClick = {() => onClose()}>{"Отмена"}</button></li>
            <li><button onClick = {() => {
                onAccept();
                setTimeout(() => onClose(), 0);
            }}>{textBtn}</button></li>
        </ul>

    return (
        <Alert 
            title = {title}
            main = {{type: "p", elem: messageElem}}
            wrapper = {<div></div>}
            btns = {btns}
            onClose = {() => onClose()}
            className = {className}
        />
    )
}

export default ModalMessage
