import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyBbnbOoq5YwLGUHVgL3jL5cdkUNsxBn4Q8",
    authDomain: "to-do-list-b5f96.firebaseapp.com",
    projectId: "to-do-list-b5f96",
    storageBucket: "to-do-list-b5f96.appspot.com",
    messagingSenderId: "934176615422",
    appId: "1:934176615422:web:d74291b8a2191eec07eeaf"

};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth();

onAuthStateChanged(auth, user => {

    console.log(`User Status Changed: `, user);

});

export {db, auth};
