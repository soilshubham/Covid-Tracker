import axios from 'axios'

const url = "https://covid19-api.com/totals"

export const getTotalData = async () => {
    try {
        const data = await axios.get(url)
        return data.data[0]
    } catch (error) {
        console.log(error)
    }
}