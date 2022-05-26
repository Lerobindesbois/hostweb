importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

// import { firebaseConfig } from './firebase-config.js';

firebase.initializeApp({
  apiKey: "AIzaSyDNcdwvj9NhTZ4nIKRrZpgLRYuwZqQI81w",
  authDomain: "selectic-iot.firebaseapp.com",
  databaseURL: "https://selectic-iot.firebaseio.com",
  projectId: "selectic-iot",
  storageBucket: "selectic-iot.appspot.com",
  messagingSenderId: "411055761702",
  appId: "1:411055761702:web:36b671d964feb02c1e79e7"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});