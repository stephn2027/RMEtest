import firebase from 'firebase';
import Rebase from 're-base';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBjdj22Fa_whoMgx9h-O5r3ADxhiHsqmFE",
        authDomain: "recipe-app-steph.firebaseapp.com",
        databaseURL: "https://recipe-app-steph-default-rtdb.firebaseio.com",
        projectId: "recipe-app-steph",
        storageBucket: "recipe-app-steph.appspot.com",
        messagingSenderId: "798233701822",
        appId: "1:798233701822:web:6023b3de01389a9f099def",
        measurementId: "G-MCRYQFKC7M"
      }
);

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;

