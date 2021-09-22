import React from 'react'
import classNames from 'classnames';

const cn = withNaming({ e: '__', m: '--' });

function ModalRemove({className}) {

    const block = cn("modal-remove");

    return (
        <div classNames={"modal-remove", className}>
            <div className = {block("background")}>
                <div className = {block("wrapper")}>
                    <div className = {block("title")}>
                        <h3>Удаления пользователя</h3>
                    </div>
                    <div className = {block("info")}>
                        <p>Удалить выбранного пользователся?</p>
                    </div>
                    <div className = {block("select")}>
                        <ul className = {block("btns")}>
                            <li><button className = {block("close")}>Отменить</button></li>
                            <li><button className={block("accept")}>Удалить</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRemove
