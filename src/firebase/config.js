import firebase from 'firebase';
import 'firebase/auth' 
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBVg4vBN6ReLc64-_uxtrvRBJ80Z-LuTjA",
//     authDomain: "olx-clone-ab15c.firebaseapp.com",
//     projectId: "olx-clone-ab15c",
//     storageBucket: "olx-clone-ab15c.appspot.com",
//     messagingSenderId: "437393432825",
//     appId: "1:437393432825:web:d8d48016be56626e7f4228",
//     measurementId: "G-RK1W0X7SR2"
//   };


//For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr09FlkERkkme-DbY_jbqL5MjI9IqQ7PE",
  authDomain: "olx2-f3cd8.firebaseapp.com",
  projectId: "olx2-f3cd8",
  storageBucket: "olx2-f3cd8.appspot.com",
  messagingSenderId: "857036948068",
  appId: "1:857036948068:web:5dcf5f5f6a03234778d571",
  measurementId: "G-JK94TCGERT"
};


  export default firebase.initializeApp(firebaseConfig)