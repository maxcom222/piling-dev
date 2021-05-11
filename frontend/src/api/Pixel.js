import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL

export const fetchPixels = async () => {
  const pixels = await axios.get(`${apiUrl}/pixels`)
  return pixels
}

export const getPixel = async (id) => {
  const pixel = await axios.get(`${apiUrl}/pixels/${id}`)
  return pixel
}