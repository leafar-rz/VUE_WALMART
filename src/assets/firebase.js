// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Importamos el firestore que es la base de datos de firebase
import { getFirestore } from 'firebase/firestore';

// Importamos el firestore que es la base de datos de firebase
import { getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCZj68fakKxyGWImFTWwKNqVirihRtDoJE',
  authDomain: "myfistproyect-ade9d.firebaseapp.com",
  projectId: "myfistproyect-ade9d",
  storageBucket: "myfistproyect-ade9d.appspot.com",
  messagingSenderId: "1015889623572",
  appId: "1:1015889623572:web:ce84ab35f07a5e93f24501"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth=getAuth(app);