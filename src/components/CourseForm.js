import React, { useState } from 'react'

import Tags from './Tags'
import { useDispatch } from 'react-redux'
import { coursesThunkAdd } from '../store/thunk'

export default function CourseForm() {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [tags, setTags] = useState([])
  const [count, setCount] = useState(0)

  const resetForm = () => {
    setName('')
    setLink('')
    setCount(count + 1)
  }

  const submitCourse = (e) => {
    e.preventDefault()
    dispatch(coursesThunkAdd({ name, link, tags }))
    resetForm()
  }

  return (
    <div className='card'>
      <div className='card-header'>Add a New Course</div>
      <div className='card-body'>
        <form className='' onSubmit={submitCourse}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              value={name}
              className='form-control'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='link'>Link</label>
            <input
              type='text'
              name='link'
              value={link}
              className='form-control'
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <p>Tags</p>
            <Tags tagsUpdated={setTags} key={count} />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
