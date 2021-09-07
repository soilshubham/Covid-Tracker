import React, { useState, useEffect } from 'react'
import { TextField, Typography } from "@material-ui/core"
import Autocomplete from '@material-ui/lab/Autocomplete'
import './CountryPicker.scss'
import { CountryDataCards } from './CountryDataCards'

export const CountryPicker = ({ countries, data }) => {
    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("selectedCountry") != null) {
            let localCountryData = localStorage.getItem("selectedCountry")
            setCountryData(JSON.parse(localCountryData))
        }
    }, [data])

    return (
        <div className="covid-country-picker">
            <div className="searchbox">
                <Typography variant="h5" align="center" gutterBottom className="heading" >
                    Country Wise
                </Typography>
                <div className="input-group">
                    <Autocomplete
                        id="combo-box-demo"
                        options={data}
                        getOptionLabel={(option) => option.country}
                        style={{ width: 350 }}
                        renderInput={(params) => <TextField {...params} label="Search By Country" variant="outlined" />}
                        onChange={(event, newValue) => {
                            setCountryData(newValue)
                            localStorage.setItem("selectedCountry", JSON.stringify(newValue));
                        }
                        }
                    />
                </div>
                <div>
                    {
                        (countryData != null)
                            ? <CountryDataCards data={countryData} />
                            : null
                    }
                </div>
            </div>
        </div>
    )
}