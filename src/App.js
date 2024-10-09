// src/App.js
import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "./firebase";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const studentsCollection = collection(db, "students");
      const studentSnapshot = await getDocs(studentsCollection);
      const studentList = studentSnapshot.docs.map((doc) => doc.data());
      setStudents(studentList);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data Mahasiswa</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <strong>Nama:</strong> {student.nama} <br />
            <strong>NPM:</strong> {student.npm} <br />
            <strong>Tempat Lahir:</strong> {student.tempat_lahir}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
