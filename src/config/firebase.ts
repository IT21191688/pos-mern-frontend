// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAD1a3156hKQ6ysPryYdhosvzXebyVzTPU",
  authDomain: "todonative-7022b.firebaseapp.com",
  databaseURL: "https://todonative-7022b-default-rtdb.firebaseio.com",
  projectId: "todonative-7022b",
  storageBucket: "todonative-7022b.appspot.com",
  messagingSenderId: "366109462089",
  appId: "1:366109462089:web:35b801a54aff7a4bf37998",
  measurementId: "G-W7Y3Z8W45W"
};
const app =initializeApp(firebaseConfig);
const storage = getStorage(app);
export {storage};