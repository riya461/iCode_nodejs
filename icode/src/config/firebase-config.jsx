
  import { initializeApp } from "firebase/app";
  import {getAuth} from 'firebase/auth';
  import {getFirestore} from 'firebase/firestore';
  const firebaseConfig = {
    apiKey: "AIzaSyApYbTdGbEVZksMwp3_e-edOdhu4nLmCDY",
    authDomain: "icode-d3421.firebaseapp.com",
    projectId: "icode-d3421",
    storageBucket: "icode-d3421.appspot.com",
    messagingSenderId: "953544832909",
    appId: "1:953544832909:web:9a2859a32062b681b9efc4",
    measurementId: "G-C2802M7LMG"
  };

  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  export const auth = getAuth(app);
  export const db = getFirestore(app);