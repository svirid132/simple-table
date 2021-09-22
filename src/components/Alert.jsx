import React from 'react'
import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';

const cn = withNaming({ e: '__', m: '--' });

function Alert({title, onClose, wrapper, main, btns, className}) {

    const block = cn("alert");

    const mainElem = main.elem;

    const content = 
        <>
            <div className = {block("title")}>
                <h3>{title}</h3>
                {onClose && <button type="button" className = {block("btn-close")} onClick = {() => onClose()}><span className ={"icon-close"}></span></button>}
            </div>
            { main.type === "ul" && React.cloneElement(mainElem, {...mainElem.props, className: classNames( mainElem.props.className, block("list"))})}
            { main.type === "p" && React.cloneElement(mainElem, {...mainElem.props, className: classNames( mainElem.props.className, block("message")) }) }
            <div className = {block("wrapper-btns")}>
                { React.cloneElement(btns, {className: classNames(btns.props.className, block("btns")), ...btns.props }) }
            </div>
        </>

    const cloneWrapper = React.cloneElement(wrapper, { ...wrapper.props, children: content, className: classNames(wrapper.props.className, block("wrapper"))});

    return (
        <div className = {classNames("alert", className)}>
            <div className = {block("background")}>
                { cloneWrapper }
            </div>
        </div>
    )
}

export default Alert
