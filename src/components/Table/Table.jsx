import { withNaming } from '@bem-react/classname';
import classNames from 'classnames';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUsers } from './tableSlice';

const headers = [
    "Фамилия",
    "Петров",
    "Отчество",
    "E-mail",
    "Логин",
    "",
]

const cn = withNaming({ e: '__', m: '--' });

function Table({onAddUser, onDeleteUser, onEditUser, className}) {

    const block = cn("table");

    const headerElems = headers.map((header, index) => {
        return <th key = {index}>{header}</th>
    });

    const users = useSelector(selectUsers());
    const usersElem = users.map((user) => {
        return (
        <tr key = {user.id}>
            <td>{user.lastName}</td>
            <td>{user.name}</td>
            <td>{user.middleName}</td>
            <td>{user.email}</td>
            <td>{user.login}</td>
            <td className = {block("td-btns")}>
                <ul className = {block("btns")}>
                    <li><button onClick={() => onEditUser(user.id)}>123</button></li>
                    <li><button onClick={() => onDeleteUser(user.id)}>567</button></li>
                </ul>
            </td>
        </tr>
        )
    });

    return (
    <div className = {classNames("table", className)}>
        <div className = {block("wrapper")}>
            <table className = {block("table")}>
                <caption>
                    <div className ={block("caption")}>
                        <h3>Полизователи</h3>
                        <button className={block("btn-add")} onClick = {() => onAddUser()}>Добавить</button>
                    </div>
                </caption> 
                <thead>
                    <tr>{headerElems}</tr>
                </thead>
                <tbody>
                    {usersElem}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default Table
