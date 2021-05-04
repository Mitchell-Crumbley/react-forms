import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSingleStudent } from '../helpers/data/StudentData';

export default function SingleStudent() {
  const [student, setStudent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleStudent(id)
      .then(setStudent);
  }, []);

  return (
    <div>
      <h1>Single Student</h1>
      <h2>{student.name}</h2>
      <h3>{student.teacher}</h3>
      <h3>{student.grade}</h3>
    </div>
  );
}

SingleStudent.propTypes = {
  id: PropTypes.string
};
