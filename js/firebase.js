        // Import the functions you need from the SDKs you need
        // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
        // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
        import "firebase/compat/firestore";
        import "firebase/compat/auth";
        import "firebase/compat/storage";
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyA2JY0d5L84gtGCsO4JJaRTT1noUMMjmbY",
          authDomain: "cozy-house-9d154.firebaseapp.com",
          databaseURL: "https://cozy-house-9d154-default-rtdb.firebaseio.com",
          projectId: "cozy-house-9d154",
          storageBucket: "cozy-house-9d154.appspot.com",
          messagingSenderId: "942843098137",
          appId: "1:942843098137:web:48feea7ddfc95ca2b66688",
          measurementId: "G-D0L57SKQ6N"
        };
      
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        export const Context = createContext(null);

        const auth = firebase.auth();
        const firestore = firebase.firestore();
        const storage = firebase.storage();
        console.log(auth);
        console.log(firestore);
        console.log(storage);
        // const app = initializeApp(firebaseConfig);
        // const analytics = getAnalytics(app);

        // const firebaseDB = firebase.initializeApp(firebaseConfig)