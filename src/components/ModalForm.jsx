import { withNaming } from '@bem-react/classname';
import { Form, Formik } from 'formik';
import React, {useState} from 'react'
import InputInfo from './InputInfo';
import * as Yup from "yup";
import classNames from 'classnames';

const cn = withNaming({ e: '__', m: '--' });

function ModalForm({ title, forInputs, className, onSubmit }) {

    const block = cn("modal-form");

    const InputInfoElems = forInputs.map((info, index) => {
        
        return (
            <li key={index}>
                <InputInfo id = {info.name} name = {info.name} label = {info.label}/>
            </li>
        )
    });

    const initialValues = new Object();
    forInputs.forEach(info => {
        initialValues[info.name] = "";
    });

    const validationSchema = new Object();
    forInputs.forEach(info => {
        if (info.name === "email") { 
            validationSchema[info.name] = Yup.string().email('Невалидная почта').required('Обязательное поле для заполнения');
            return;
        }
        validationSchema[info.name] = Yup.string().required('Обязательное поле для заполнения');
    })

    return (
    <div className = { classNames("modal-form", className) }>
        <div className = {block("title")}>
            <h3>{title}</h3>
            <button type="button">close</button>
        </div>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object(validationSchema)}
                onSubmit={(values, {setSubmitting}) => {
                    console.info(values);
                    onSubmit();
                    setSubmitting(false);
                }}
            >
            {(props) => (
                <Form>
                    <ul className = { block("list-input") }>
                        { InputInfoElems }
                    </ul>
                    {props.isValid && props.dirty && <button type="submit">Добавить</button>}
                </Form>
            )}
            </Formik>
    </div>
    )
}

export default ModalForm
