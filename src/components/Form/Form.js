import React from 'react';
import {info} from "./FormFields";
import "./Form.css"
import form from "../../store/form"
import * as mobx from "mobx";
import booksStore from "../../store/booksStore";
import {withRouter} from "react-router";
import actions from "../../static/actions";

const Form = (props) => {
    let fields = null;
    if (form.action === actions.ADD) {
        fields = info({});
    } else if (form.action === actions.EDIT) {
        fields = info(mobx.toJS(form.bookToEdit))
    }



    const handleSubmit = (e) => {
        e.preventDefault();

        let formToSend = mobx.toJS(form.formInfo);

        if (formToSend.name && formToSend.authors && formToSend.releaseYear && formToSend.ISBN) {
            if (form.action === actions.ADD) {
                booksStore.addBook(formToSend);
            } else if (form.action === actions.EDIT) {
                booksStore.updateBook(mobx.toJS(form.bookToEdit).id, formToSend);
            }

            props.history.push("/catalog");
        } else {
            alert("Заполните форму!")
        }
    }

    return (
        <div className="form-inner send-form">
            <form onSubmit={handleSubmit}>
                {fields}
                <button className="button submit-button">
                    <span>Завершить</span>
                </button>
            </form>
        </div>
    );
}

export default withRouter(Form);