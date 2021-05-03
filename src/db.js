import firebase from "firebase";
import "firebase/firestore"
import "firebase/auth"

export const collections = require("./static/collections.json")
firebase.initializeApp(require("./static/firebaseConfig.json"));
export const firestore = firebase.firestore();
export const auth = firebase.auth();