import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Configuración de Firebase
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
