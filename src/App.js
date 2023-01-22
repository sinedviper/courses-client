import { useEffect, useState } from 'react';

import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import {table} from "./utils/api"
import './App.css';




function App() {
  const [courses, setCourses] = useState([]);
  
  const loadCourses = async () => {
    try {

      const fields = await table.select().firstPage()

      console.log(fields)
    } catch (error) {
        console.error(error);
    }
  }

  useEffect(() => {
    loadCourses();
  }, []);
  
  return (
    <div className="container mt-5">
          <h1 className="mb-5 text-center">Course Tracker</h1>
          <CourseForm courseAdded={loadCourses} />
          {courses && <CourseList courses={courses} refreshCourses={loadCourses} />}
    </div>
  );
}

export default App;
