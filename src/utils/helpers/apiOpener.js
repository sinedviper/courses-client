export const apiOpener = (courses) => courses.map(({ id, fields }) => ({ id, ...fields }))
