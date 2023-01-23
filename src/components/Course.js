import React from 'react'
import { useDispatch } from 'react-redux'

import { coursesThunkDel, coursesThunkUpdate } from '../store/thunk'

const Course = ({ course }) => {
  const dispatch = useDispatch()

  const markCoursePurchased = () => dispatch(coursesThunkUpdate({ ...course, purchased: true }))
  const deleteCourse = () => dispatch(coursesThunkDel(course.id))

  return (
    <div className='list-group-item'>
      <a href={course.link}>
        <h4 className='list-group-item-heading'>{course.name}</h4>
      </a>
      <p>
        Tags:{' '}
        {course.tags &&
          course.tags.map((tag, index) => (
            <span className='badge badge-primary mr-2' key={index}>
              {tag}
            </span>
          ))}
      </p>
      {!course.purchased && (
        <button className='btn btn-sm btn-primary' onClick={markCoursePurchased}>
          Purchased
        </button>
      )}
      <button className='btn btn-sm btn-danger ml-2' onClick={deleteCourse}>
        Delete
      </button>
    </div>
  )
}
export default Course
