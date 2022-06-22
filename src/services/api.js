import axios from 'axios';

// export const fetchData = async(text) => {
//     return await axios.get(`https://breakingbadapi.com/api/characters?name=${text}`)
// }

export const fetchData = (text) => {
    return axios.get(`https://breakingbadapi.com/api/characters?name=${text}`)
}