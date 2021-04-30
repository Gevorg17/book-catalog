import {info} from "./BookFIelds";
import "./Book.css"

const Book = (props) => {
    let bookFields = info(props.book);

    return (
        <div>
            {bookFields}
        </div>
    );
}

export default Book;