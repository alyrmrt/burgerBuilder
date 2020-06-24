import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-myburger-34041.firebaseio.com/'
})

export default instance
