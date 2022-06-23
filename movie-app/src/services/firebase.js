import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD805kTR7RrY3eapMICcZxjVTMMCvfbzvQ",
    authDomain: "movie-app-307ba.firebaseapp.com",
    databaseURL: "https://movie-app-307ba-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "movie-app-307ba",
    storageBucket: "movie-app-307ba.appspot.com",
    messagingSenderId: "869879164104",
    appId: "1:869879164104:web:3bfa17ac76751d825e09fd"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase