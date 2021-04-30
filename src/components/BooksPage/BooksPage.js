import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./BooksPage.css"
import BooksList from "../BooksList/BooksList";
import {withRouter} from "react-router";

const BooksPage = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        props.history.push("/catalog/form")

    }
    return (
        <div>
            <button onClick={handleClick} className="add-button">
                <FontAwesomeIcon className="plus" icon={faPlus}/>
                <span>Добавить книгу</span>
            </button>
            <BooksList />
        </div>
    );
}

export default withRouter(BooksPage);