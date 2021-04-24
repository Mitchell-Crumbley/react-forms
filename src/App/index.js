import React from 'react';
import firebase from 'firebase/app';
import firebaseConfig from '../helpers/data/apiKeys';
import StudentForm from '../StudentForm';
import './App.scss';

function App() {
  firebase.initializeApp(firebaseConfig);

  return (
    <div className='App'>
      <StudentForm />
    </div>
  );
}

export default App;
