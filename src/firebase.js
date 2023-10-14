import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage'; // Import getStorage

const firebaseConfig = {
  apiKey: "AIzaSyCTG40L_VEIrZNbVXo_T56pB6sDjwEMbZw",
  authDomain: "disney-clone-35a8e.firebaseapp.com",
  projectId: "disney-clone-35a8e",
  storageBucket: "disney-clone-35a8e.appspot.com",
  messagingSenderId: "405279869535",
  appId: "1:405279869535:web:885504f324cc861f3c69ea",
  measurementId: "G-W1EKRCHKSF"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new  GoogleAuthProvider(); // Remove 'firebase' and 'auth'
const storage = getStorage(firebaseApp); // Initialize Firebase Storage

export { auth, provider, storage };
export default db;
