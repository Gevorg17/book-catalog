import Header from "./Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import BooksPage from "./BooksPage/BooksPage";
import FormPage from "./FormPage/FormPage";
import {Redirect} from "react-router";
import AuthModal from "./AuthModal/AuthModal";


const PagesManager = () => {
    return (
        <BrowserRouter>
            <Redirect from="/" to="/catalog"/>
            <Header />
            <AuthModal />
            <Route exact path="/catalog" render={() => <BooksPage />}/>
            <Route exact path="/catalog/form" render={() => <FormPage />}/>
        </BrowserRouter>
    );
}

export default PagesManager;
