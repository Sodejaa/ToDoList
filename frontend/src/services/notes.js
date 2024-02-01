import axios from 'axios'
const baseUrl = 'http://localhost:8080/note'


let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const request = axios.get(`${baseUrl}/getAll`)
  const response = await request
  return response.data
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post('http://localhost:8080/note/add', newObject, config)
  return response.data
}

const update = async (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  const response = await request
  return response.data
}

const remove = async (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  const response = await request
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update, remove, setToken }