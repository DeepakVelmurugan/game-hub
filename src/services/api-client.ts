import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '65ef0ead31654ec3b40c7dbd884aeabc'
    }
})