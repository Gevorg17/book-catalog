import Form from "../Form/Form";
import {withRouter} from "react-router";


const FormPage = (props) => {
    const handleClick = (e) => {
        e.preventDefault();

        props.history.push("/catalog");
    }

    return (
        <div>
            <button onClick={handleClick} className="button">
                <span>
                    Назад
                </span>
            </button>
            <Form/>
        </div>
    );
}

export default withRouter(FormPage);
