// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXK8VDfbyOIMdTyNrb7TcaqI4MS7WzZbM",
    authDomain: "soramtin.firebaseapp.com",
    projectId: "soramtin",
    storageBucket: "soramtin.appspot.com",
    messagingSenderId: "460375960749",
    appId: "1:460375960749:web:aec94ecf3d678593af6a24",
    measurementId: "G-DFXN5BS7HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore()