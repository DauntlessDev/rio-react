import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { seedDatabase } from '../seed'



const config = {
    apiKey: "AIzaSyAPbTZHmZZmaYq_XrwC7vBaRTKheSv8e8k",
    authDomain: "rio-react-93624.firebaseapp.com",
    databaseURL: "https://rio-react-93624.firebaseio.com",
    projectId: "rio-react-93624",
    storageBucket: "rio-react-93624.appspot.com",
    messagingSenderId: "930390959852",
    appId: "1:930390959852:web:47fd55ae6c6124c5e727c9"
};

const firebase = Firebase.initializeApp(config);

export { firebase };