import React from 'react';
import PropTypes from 'prop-types';
import StudentForm from '../components/StudentForm';
import StudentCard from '../components/StudentCard';
import '../App/App.scss';

function Students({ students, setStudents }) {
  return (
    <>
      <StudentForm
        formTitle='Add Student'
        setStudents={setStudents}
      />
      <hr/>
      <div className="card-container">
        {students.map((studentInfo) => (
          <StudentCard
            key={studentInfo.firebaseKey}
            firebaseKey={studentInfo.firebaseKey}
            name={studentInfo.name}
            teacher={studentInfo.teacher}
            grade={Number(studentInfo.grade)}
            setStudents={setStudents}
          />
        ))}
      </div>
    </>
  );
}

Students.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired,
};

export default Students;
