import React from 'react'

import Course from './Course'

const CourseList = ({ courses }) => {
  return (
    <div>
      <h2 className='mt-5 mb-3'>To Learn</h2>
      <div className='list-group'>
        {courses &&
          courses
            .filter((course) => !course.purchased)
            .map((course) => <Course course={course} key={course.id} />)}
      </div>
      <h2 className='mt-5 mb-3'>Already Purchased</h2>
      {courses &&
        courses
          .filter((course) => course.purchased)
          .map((course) => <Course course={course} key={course.id} />)}
    </div>
  )
}

export default CourseList
