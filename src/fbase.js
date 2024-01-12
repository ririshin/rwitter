import { initializeApp as firebase } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_API_PROJECT_ID,
    storageBucket: process.env.REACT_APP_API_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_API_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_API_APP_ID,
};

const app = firebase(firebaseConfig);

export const authService = getAuth();
export const firebaseInstacne = firebase;
