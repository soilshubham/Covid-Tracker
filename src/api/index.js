import axios from 'axios'

const url = "https://covid19-api.com"

export const getTotalData = async () => {
    try {
        const data = await axios.get(`${url}/totals`)
        return data.data[0]
    } catch (error) {
    }
}
export const getCountries = async () => {
    try {
        const data = await axios.get(`${url}/help/countries`)
        return data.data
    } catch (error) {
    }
}
export const getCountriesData = async () => {
    try {
        const data = await axios.get(`${url}/country/all`)
        return data.data
    } catch (error) {
    }
}