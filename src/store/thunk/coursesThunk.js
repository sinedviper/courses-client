import { createAsyncThunk } from '@reduxjs/toolkit'

import { table } from '../../utils/api'
import { apiOpener } from '../../utils/helpers'

export const coursesThunkGet = createAsyncThunk('@@courses/get', async () => {
  const res = await table.select().firstPage()
  return apiOpener(res)
})

export const coursesThunkAdd = createAsyncThunk('@@courses/add', async (fields) => {
  await table.create([{ fields }])
  const res = await table.select().firstPage()
  return apiOpener(res)
})

export const coursesThunkDel = createAsyncThunk('@@courses/delete', async (id) => {
  await table.destroy(id)
  const res = await table.select().firstPage()
  return apiOpener(res)
})

export const coursesThunkUpdate = createAsyncThunk('@@courses/update', async (course) => {
  const { id, ...fields } = course
  await table.update([{ id, fields }])
  const res = await table.select().firstPage()
  return apiOpener(res)
})
