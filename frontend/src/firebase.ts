import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth'; // Importing the auth module from Firebase

const firebaseConfig = {
    apiKey: "AIzaSyD8vcFw60ADNNY72jIBTY2YcUuM4EMQwSo",
    authDomain: "mini-project-f2736.firebaseapp.com",
    projectId: "mini-project-f2736",
    storageBucket: "mini-project-f2736.appspot.com",
    messagingSenderId: "447345224411",
    appId: "1:447345224411:web:aff5a5d72b54b4e2957afe",
    measurementId: "G-NHZK7WWEMY"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Getting the Auth instance from Firebase
const auth: Auth = getAuth(firebaseApp);

export { auth, firebaseApp };
