import {makeAutoObservable} from "mobx";
import actions from "../static/actions"

class Form {
    constructor() {
        makeAutoObservable(this);
    }

    formInfo = {};

    bookToEdit = {};

    action = actions.DEFAULT;

    formInfoChanged (name, value) {
        this.formInfo[name] = value;
    }

}

export default new Form();