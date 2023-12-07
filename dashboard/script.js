  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDHfPsz0eTxNNFci8TLnUG8M36riCZA2AU",
    authDomain: "karenmylove-8faae.firebaseapp.com",
    projectId: "karenmylove-8faae",
    storageBucket: "karenmylove-8faae.appspot.com",
    messagingSenderId: "118223797160",
    appId: "1:118223797160:web:8986cac7c88781563d7b9d",
    measurementId: "G-KECXRMVK43"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
