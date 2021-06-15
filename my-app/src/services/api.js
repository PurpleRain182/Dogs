import axios from 'axios'

const api=axios.create({
    baseURL:"http://c8619f4f808c.ngrok.io"
})

export default api