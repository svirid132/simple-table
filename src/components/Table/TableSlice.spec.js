
import produce from "immer";
import tableReducer, { addUser, editUser, removeUser } from "./tableSlice";


describe("Test on logic table", () => {

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

    it("add new user", () => {
        const newUser = {
            lastName: "Сергеев",
            name: "Григорий",
            middleName: "Викторович",
            email: "mail4@mail.com",
            login: "user4",
        }
        const nextState = tableReducer(initialState, addUser(newUser));
        newUser.id = 4
        const equalState = produce(initialState, (draft) => {
            ++draft.currentId;
            draft.users.unshift(newUser);
        });
        expect(nextState).toEqual(equalState);
        }
    );
    it("remove user", () => {
        const id = 2;
        const nextState = tableReducer(initialState, removeUser(id));
        const equalState = produce(initialState, (draft) => {
            draft.users = draft.users.filter((user) => user.id !== id);
        });
        expect(nextState).toEqual(equalState);
    });
    it("editing user", () => {
        const newUser = {
            id: 2,
            lastName: "Свиридов",
            name: "Александр",
            middleName: "Сергеевич",
            email: "mail4@mail.com",
            login: "user4",
        }
        const nextState = tableReducer(initialState, editUser(newUser));
        const equalState = produce(initialState, (draft) => {
            draft.users = draft.users.map((user) => {
                if (user.id === newUser.id) return newUser;
                return user;
            });
        });
        expect(nextState).toEqual(equalState);
    });
});
