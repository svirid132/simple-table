
import { useField } from 'formik';
import { withNaming } from '@bem-react/classname';
import React from 'react'
import classNames from 'classnames';

const cn = withNaming({ e: '__', m: '--' });

function InputInfo({label, ...props}) {

    const block = cn("input-info");

    const [field, meta] = useField(props);

    return (
    <div className = {classNames("input-info", props.className)}>
        <div className = { block("wrapper", {error: Boolean(meta.touched && meta.error)}) }>
            <label htmlFor={props.id}>{label}</label>
            <input id = {props.id} {...field} placeholder ={props.placeholder} autoComplete="off" type="text" />
            {meta.touched && meta.error ? (
                <div className={block("error")}>{meta.error}</div>
            ) : null}
        </div>
    </div>
    )
}

export default InputInfo
