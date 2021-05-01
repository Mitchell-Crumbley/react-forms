import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import { getStudents } from '../helpers/data/StudentData';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then(setStudents);
  }, []);

  return (
    <>
    <Router>
      <NavBar />
      <Routes
      students={students}
      setStudents={setStudents}
      />
    </Router>
  </>
  );
}

export default App;
