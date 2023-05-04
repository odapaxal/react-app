import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgjIbXaIgIQp2d3NtErogwL_SIOzz-qco",
  authDomain: "vaske-app.firebaseapp.com",
  projectId: "vaske-app",
  storageBucket: "vaske-app.appspot.com",
  messagingSenderId: "147203418558",
  appId: "1:147203418558:web:24ff70603dfd39b099f1ef",
  measurementId: "G-Y4JJ45G41C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);