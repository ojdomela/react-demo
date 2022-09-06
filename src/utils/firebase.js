import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "fb-comments-55627.firebaseapp.com",
    projectId: "fb-comments-55627",
    storageBucket: "fb-comments-55627.appspot.com",
    messagingSenderId: "961656220843",
    appId: "1:961656220843:web:ef6caf6c459a64f5c55bee"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    console.log(auth)
    if (user) {
        console.log('user logged in');
        console.log(user)
    } else {
        console.log('user logged out');
    }
});

export const loginToAccount = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredential);
    } catch (error) {
        // error handling?
        console.log(error);
    }
}

export const createNewAccount = async (username, email, password) => {
    // validation goes here
    console.log(email)
    console.log(password)
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredential);
    } catch (error) {
        // error handling?
        console.log(error.code);
        console.log(error.message);
    }
}

export const logout = () => {
    signOut(auth)
}
