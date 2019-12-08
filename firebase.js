// import your firebase from firebase library
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBrrv891rzJrI1sFSajeYpGDD1UwUT5lkI",
    authDomain: "webd303-assignment02.firebaseapp.com",
    databaseURL: "https://webd303-assignment02.firebaseio.com",
    projectId: "webd303-assignment02",
    storageBucket: "webd303-assignment02.appspot.com",
    messagingSenderId: "785070297209",
    appId: "1:785070297209:web:a1e66a8ceab521d1f204a8"
};

firebase.initializeApp(firebaseConfig);

// ensure to export your firebase
export default firebase; 