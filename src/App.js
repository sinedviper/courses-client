import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CourseForm from './components/CourseForm'
import CourseList from './components/CourseList'
import { coursesThunkGet } from './store/thunk'
import { getCoruses } from './store/select'

import './App.css'

function App() {
  const dispatch = useDispatch()
  const courses = useSelector(getCoruses)

  useEffect(() => {
    dispatch(coursesThunkGet())
  }, [])

  return (
    <div className='container mt-5'>
      <h1 className='mb-5 text-center'>Course Tracker</h1>
      <CourseForm />
      <CourseList courses={courses} />
    </div>
  )
}

export default App
