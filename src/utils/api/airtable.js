import Airtable from 'airtable'

export const table = new Airtable({ apiKey: process.env.REACT_APP_SECRET_KEY_AIRTABLE })
  .base(process.env.REACT_APP_SECRET_ID_AIRTABLE)
  .table('Courses')
