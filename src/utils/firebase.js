// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyQBL7m56nEYJGMAQTDDiHLDsE_9XF-aU",
  authDomain: "cinebility-abf73.firebaseapp.com",
  projectId: "cinebility-abf73",
  storageBucket: "cinebility-abf73.appspot.com",
  messagingSenderId: "824617835971",
  appId: "1:824617835971:web:34555cb64bf359d3113176",
  measurementId: "G-R6QMBE3HRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();