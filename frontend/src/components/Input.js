import React from 'react';
import InputContainer from '../components/InputContainer'
import classes from '../components/css/input.module.css'
function Input( {label, type, defaultValue, onChange, onBlur, name, error}, ref) {
    const getErrorMessage = () => {
        if (!error) return;
        if(error.message) return error.message;

        switch(error.type) {
            case 'required':
                return 'This Field is Required';
                case 'minLength' :
                    return 'Field Is Too Short';
                default:
                    return '*';
        }
    };

    return (
        <InputContainer label={label}>
            <input
            defaultValue={defaultValue}
            className={classes.input}
            type={type}
            placeholder={label}
            ref={ref}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            />
            {error && <div className={classes.erorr}>{getErrorMessage()}</div>}
        </InputContainer>

    );

}


export default React.forwardRef(Input);