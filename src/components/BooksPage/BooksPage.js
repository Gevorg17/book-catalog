import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./BooksPage.css"
import BooksList from "../BooksList/BooksList";
import {withRouter} from "react-router";
import form from "../../store/form";
import actions from "../../static/actions";
import "../../css/button.css"

const BooksPage = (props) => {
    const handleClick = (e) => {
        e.preventDefault();

        form.action = actions.ADD;
        props.history.push("/catalog/form")

    }
    return (
        <div>
            <button onClick={handleClick} className="button">
                <FontAwesomeIcon className="icon" icon={faPlus}/>
                <span>Добавить книгу</span>
            </button>
            <BooksList />
        </div>
    );
}

export default withRouter(BooksPage);