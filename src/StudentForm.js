import React, { useState } from 'react';
import addStudent from './helpers/data/StudentData';

export default function StudentForm() {
  const [students, setStudents] = useState({
    name: '',
    teacher: '',
    grade: 0
  });

  const handleInputChange = (e) => {
    setStudents((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'grade' ? Number(e.target.value) : e.target.value,
    }));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    addStudent(students);
  };

  return (
    <>
    <div className="student-form">
      <form
      id="addStudentForm"
      autoComplete="off"
      onSubmit={handleSumbit}
      >
        <h2>New Student</h2>
        <div>
        <label>Name: </label>
        <input
        name='name'
        type='text'
        placeholder="Name"
        value={students.name.value}
        onChange={handleInputChange}
        />
        </div>

        <div>
        <label>Teacher:</label>
        <input
          name='teacher'
          value={students.teacher.value}
          type='text'
          placeholder='Enter a Teacher Name'
          onChange={handleInputChange}
        />
      </div>

      <div>
      <label>Grade:</label>
      <input
        name='grade'
        value={students.grade.value}
        type='number'
        placeholder='Enter a Grade'
        onChange={handleInputChange}
      />
      </div>

      <button type='submit'>Submit</button>
      </form>
    </div>
    </>
  );
}
