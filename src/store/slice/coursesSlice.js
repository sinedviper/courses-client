import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    courses: {},
}

export const coursesSlice = createSlice({
    name: '@@courses',
    initialState,
    reducers: {}
})

export const coursesReducer = coursesSlice.reducer