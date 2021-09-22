import React, { useMemo, useState } from 'react'
import Table from '../components/Table/Table';
import ModalForm from '../components/ModalForm';
import ModalMessage from '../components/ModalMessage';
import inputLabels from './inputLabels';
import { addUser, editUser, removeUser, selectUserOnId } from '../components/Table/tableSlice';
import { useDispatch, useSelector } from 'react-redux';
import { withNaming } from '@bem-react/classname';
import produce from 'immer';

const cn = withNaming({ e: '__', m: '--' });

function Page() {

    const block = cn("page");
    const dispatch = useDispatch();
    const [userDelete, setUserDelete] = useState({viewModal: false, id: null});
    const [viewModalFormAdd, setViewModalFormAdd] = useState(false);
    const [viewModalFormEdit, setViewModalFormEdit] = useState({viewModal: false, id: null});

    const editingUser = useSelector(selectUserOnId(viewModalFormEdit.id));

    let userInputs = useMemo(() => {
        if (viewModalFormEdit.viewModal === false) return null;
        const userInputs = inputLabels.map((inputLabel) => {
            const name = inputLabel.name;
            inputLabel.value = editingUser[name];
            return inputLabel;
        });
        return userInputs;
    }, [viewModalFormEdit]);

    return (
        <div className={"page"}>
            <div className = {block("elems")}>
                <div className = {block("navigation")}></div>
                <div className = {block("menu")}></div>
                <Table 
                    onAddUser = {() => setViewModalFormAdd(true)} 
                    onDeleteUser = {(id) => setUserDelete({viewModal: true, id})}
                    onEditUser = {(id) => setViewModalFormEdit({viewModal: true, id})}
                    className = {block("table")}
                />
            </div>
            {viewModalFormAdd && <ModalForm 
                title = {"Создание пользоватетя"} 
                forInputs = {inputLabels}
                buttonText = {"Добавить"}
                className = {block("modal")}
                onSubmit = {(user) => dispatch(addUser(user))}
                onClose = {() => { setViewModalFormAdd(false)} }
            />}
            {userDelete.viewModal  && <ModalMessage
                title = {"Удаление пользователя"}
                message = {"Удалить выбранного пользователя?"}
                textBtn = {"Удалить"}
                onAccept = {() => dispatch(removeUser(userDelete.id))}
                onClose = {() => setUserDelete({viewModal: false, id: null})}
                className = {block("modal")}
            />}
            {viewModalFormEdit.viewModal && <ModalForm 
                title = {"Редактирование пользователя"} 
                forInputs = {userInputs}
                buttonText = {"Сохранить"}
                onSubmit = {(user) => dispatch(editUser({...user, id: viewModalFormEdit.id}))}
                onClose = {() => { setViewModalFormEdit({viewModal: false, id: null})} }
                className = {block("modal")}
            />}
        </div>
    )
}

export default Page
