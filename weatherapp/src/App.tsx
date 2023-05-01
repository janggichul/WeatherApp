import './App.css';
import Router from 'router/Router';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseKey from './firebaseKey';

const fire = initializeApp(firebaseKey);

export const db = getFirestore(fire);
export const Auth = getAuth(fire);

function App() {
  return <Router />;
}

export default App;
