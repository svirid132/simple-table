import logo from './logo.svg';
import './App.css';
import ModalForm from './components/ModalForm';

const inputProps = [
  {
    name: "lastName",
    label: "Фамилия"
  },
  {
    name: "name",
    label: "Имя"
  },
  {
    name: "middleName",
    label: "Отчество"
  },
  {
    name: "email",
    label: "E-mail"
  },
  {
    name: "login",
    label: "Логин"
  },
]

function App() {
  return (
    <ModalForm forInputs = {inputProps} onSubmit = {() => alert("this!!!")}/>
  );
}

export default App;
