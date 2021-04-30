import React from 'react';
import {info} from "./FormFields";
import "./Form.css"

const Form = (props) => {
    let fields = info();
    return (
        <div>
            <form>
                {fields}
                <input type="button" value="Завершить"/>
            </form>
        </div>
    );
}

export default Form;