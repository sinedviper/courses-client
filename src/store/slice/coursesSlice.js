import { createSlice } from '@reduxjs/toolkit'

import { coursesThunkAdd, coursesThunkDel, coursesThunkGet, coursesThunkUpdate } from '../thunk'

const initialState = {
  status: 'idle',
  courses: [],
}

export const coursesSlice = createSlice({
  name: '@@courses',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(coursesThunkGet.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(coursesThunkGet.rejected, (state, action) => {
        state.status = 'reject'
        console.log(action.error.message)
      })
      .addCase(coursesThunkGet.fulfilled, (state, action) => {
        state.status = 'received'
        state.courses = action.payload
      })
      .addCase(coursesThunkAdd.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(coursesThunkAdd.rejected, (state, action) => {
        state.status = 'reject'
        console.log(action.error.message)
      })
      .addCase(coursesThunkAdd.fulfilled, (state, action) => {
        state.status = 'received'
        state.courses = action.payload
      })
      .addCase(coursesThunkDel.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(coursesThunkDel.rejected, (state, action) => {
        state.status = 'reject'
        console.log(action.error.message)
      })
      .addCase(coursesThunkDel.fulfilled, (state, action) => {
        state.status = 'received'
        state.courses = action.payload
      })
      .addCase(coursesThunkUpdate.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(coursesThunkUpdate.rejected, (state, action) => {
        state.status = 'reject'
        console.log(action.error.message)
      })
      .addCase(coursesThunkUpdate.fulfilled, (state, action) => {
        state.status = 'received'
        state.courses = action.payload
      })
  },
})

export const coursesReducer = coursesSlice.reducer
