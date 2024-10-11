import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
require('dotenv').config();  

// firebase api
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Init firebase
const app = initializeApp(firebaseConfig);

// realtime Database 
const database = getDatabase(app);

export default database;