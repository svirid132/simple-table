import { Form, Formik } from 'formik';
import React, {useMemo} from 'react'
import InputInfo from './InputInfo';
import * as Yup from "yup";
import classNames from 'classnames';
import Alert from './Alert';

function ModalForm({ title, forInputs, buttonText, className, onSubmit, onClose }) {

    const InputInfoElems = forInputs.map((info, index) => {
        return (
            <li key={index}>
                <InputInfo id = {info.name} name = {info.name} label = {info.label} placeholder = {info.placeholder}/>
            </li>
        )
    });

    const initialValues = useMemo(() => {
        const initialValues = {};
        forInputs.forEach(info => {
            initialValues[info.name] = info.value || "";
        });
        return initialValues;
    }, [forInputs]);

    const validationSchema = useMemo( () => {
        const validationSchema = {};
        forInputs.forEach(info => {
            if (info.name === "email") { 
                validationSchema[info.name] = Yup.string().email('Невалидная почта').required('Обязательное поле для заполнения');
                return;
            }
            validationSchema[info.name] = Yup.string().required('Обязательное поле для заполнения');
        });
        return validationSchema;
    }, [forInputs]);   

    return (
    <div className = { classNames("modal-form", className) }>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object(validationSchema)}
                onSubmit={(values, {setSubmitting}) => {
                    onSubmit(values);
                    setTimeout(() => onClose(), 0);
                    setSubmitting(false);
                }}
            >
            {(props) => (
            <>
                <Alert 
                    title={title} 
                    wrapper = {<Form />}
                    main = {{type: "ul", elem: <ul>{ InputInfoElems }</ul>} }
                    btns = {<button data-count="single" type="submit" disabled = {!(props.isValid && props.dirty)}>{buttonText}</button>}
                    className = {className}
                    onClose = {() => onClose()}
                />
            </>
            )}
            </Formik>
    </div>
    )
}

export default ModalForm
