import React from 'react'
import Alert from './Alert'

function ModalMessage({title, message, textBtn, onAccept, onClose, className}) {

    const messageElem = <p>{message}</p>
    const btns = 
        <ul>
            <button onClick = {() => onClose()}>{"Отмена"}</button>
            <button onClick = {() => {
                onAccept();
                setTimeout(() => onClose(), 0);
            }}>{textBtn}</button>
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
