import { createSlice } from '@reduxjs/toolkit'
import produce from 'immer';

const initialState = {
    currentId: 3,
    users: [
        {
            id: 1,
            lastName: "Иванов",
            name: "Иван",
            middleName: "Иванович",
            email: "mail1@mail.com",
            login: "user1",
        },
        {
            id: 2,
            lastName: "Петров",
            name: "Петр",
            middleName: "Сергеевич",
            email: "mail2@mail.com",
            login: "user2",
        },
        {
            id: 3,
            lastName: "Сергеев",
            name: "Григорий",
            middleName: "Викторович",
            email: "mail3@mail.com",
            login: "user3",
        }
    ]
}

const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        addUser(state, action) {
            ++state.currentId;
            const users = state.users;
            const newUser = produce(action.payload, (draft) => {
                draft.id = state.currentId;
            });
            users.push(newUser);
        },
        removeUser(state, action) {
            const id = action.payload;
            state.users = state.users.filter((user) => user.id !== id);
        },
        editUser(state, action) {
            const edigingUser = action.payload;
            state.users = state.users.map((user) => {
                if (edigingUser.id === user.id) return edigingUser;
                return user;
            });
        }
    }
});

export const {
    addUser,
    removeUser,
    editUser,
} = tableSlice.actions

export const selectUserOnId = (id) => (state) => {
    for (const user of state.table.users) {
        if (user.id === id) {
            return user;
        }
    }
    return null;
}

export const selectUsers= () => (state) => {
    return state.table.users;
}

export default tableSlice.reducer

