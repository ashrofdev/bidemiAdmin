import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBuF8hPZLR2wH9o_3DmsuLBpCfCSPxyEOE",
  authDomain: "pclimited-b5ee3.firebaseapp.com",
  databaseURL: "https://pclimited-b5ee3.firebaseio.com",
  projectId: "pclimited-b5ee3",
  storageBucket: "pclimited-b5ee3.appspot.com",
  messagingSenderId: "75498064754",
  appId: "1:75498064754:web:0d562278e0e068e506ebeb",
  measurementId: "G-SQFZR8X3SF"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 export const firebaseDB = firebase.database()

 export const storage = firebase.storage()
 
 