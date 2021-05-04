import {info} from "./BookFIelds";
import "./Book.css"
import booksStore from "../../store/booksStore";
import form from "../../store/form";
import actions from "../../static/actions";
import {withRouter} from "react-router";
import "../../css/form.css"

const Book = (props) => {
    let bookFields = info(props.book);

    const handleDelete = (e) => {
        e.preventDefault();

        booksStore.deleteBook(props.id);
    }

    const handleEdit = (e) => {
        e.preventDefault();

        form.action = actions.EDIT;
        form.bookToEdit = props.book;
        props.history.push("/catalog/form")
    }

    return (
        <div className="form-inner book-block">
            {bookFields}
            <div>
                <button onClick={handleEdit} className="button edit-button">
                    <span>Изменить</span>
                </button>
                <button onClick={handleDelete} className="button delete-button">
                    <span>Удалить</span>
                </button>
            </div>
        </div>
    );
}

export default withRouter(Book);