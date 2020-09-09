import axios from 'axios'

export default axios.create({
  baseURL: 'https://book-of-contact.firebaseio.com/'
})
