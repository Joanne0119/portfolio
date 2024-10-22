import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAogeSIF7RLr62fcXsF2uL7AXKjqqjgrUQ",
    authDomain: "portfolio-42c0c.firebaseapp.com",
    projectId: "portfolio-42c0c",
    storageBucket: "portfolio-42c0c.appspot.com",
    messagingSenderId: "870753997682",
    appId: "1:870753997682:web:f26db83fc1abcec0d343eb",
    measurementId: "G-DRCH8D4RMW"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };