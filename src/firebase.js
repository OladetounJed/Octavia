/* 
  This is the Firebase SDK 
  configuration.


   */

  import * as firebase from "firebase/app";
  import "firebase/auth"
 

  const firebaseConfig = {
    apiKey: "AIzaSyD2ZP4luePXcvLe0FDCmeBv-V_Cj8ubSLk",
    authDomain: "octavia-pay.firebaseapp.com",
    databaseURL: "https://octavia-pay.firebaseio.com",
    projectId: "octavia-pay",
    storageBucket: "octavia-pay.appspot.com",
    messagingSenderId: "104648202087",
    appId: "1:104648202087:web:e8678b000c8c7727ae41c2",
    measurementId: "G-S0X9LF8EPB"
  };
  
  let fb = firebase.initializeApp(firebaseConfig);

 

  
  export default fb;