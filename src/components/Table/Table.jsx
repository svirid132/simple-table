import React from 'react'

const headers = [
    "Фамилия",
    "Петров",
    "Отчество",
    "E-mail",
    "Логин",
]

function Table() {

    const headerElems = headers.map((header, index) => {
        return <th key = {index}>{header}</th>
    });

    return (
    <table>
        <caption>Monthly savings</caption> 
        <tr>{headerElems}</tr>
        <tr><td>данные</td><td>данные</td></tr>
    </table>
    )
}

export default Table
