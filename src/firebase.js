import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCmu3Y1XsF2PtJl3ou164K-LtctqsJx5nk",
    authDomain: "react-http-4b8ff.firebaseapp.com",
    databaseURL: "https://react-http-4b8ff-default-rtdb.firebaseio.com",
    projectId: "react-http-4b8ff",
    storageBucket: "react-http-4b8ff.appspot.com",
    messagingSenderId: "185549694988",
    appId: "1:185549694988:web:629d0e838e818cefe9e629"
};

export const auth = firebase.initializeApp(firebaseConfig).auth();