import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey:
    import.meta.env.REACT_APP_FIREBASE_API_KEY ||
    'AIzaSyAzCmqMOdRTk-wnwAvlAP2rTBMKZ3Joy3U',
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDER,
  appId: import.meta.env.REACT_APP_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
