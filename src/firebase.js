import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCDEUidmkPg1ilPWoDhsMWjnEc4ngw7iYM",
    authDomain: "travel-app-6b3eb.firebaseapp.com",
    projectId: "travel-app-6b3eb",
    storageBucket: "travel-app-6b3eb.appspot.com",
    messagingSenderId: "393464399242",
    appId: "1:393464399242:web:342aee37cc33d0ccd9b473"
  }

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig)

  export default fire