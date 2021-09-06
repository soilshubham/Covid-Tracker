import React from 'react'
import { CountryDataCardItem } from './CountryDataCardItem'
import { Grid, Typography } from "@material-ui/core"

export const CountryDataCards = ({ data: { confirmed = "", recovered = "", deaths = "", lastUpdate = "", country = "", code = "" } }) => {
    return (
        <div className="country-data">
            <div className="container">
                <Typography variant="h6" align="center" className="wideFont bold country-name">
                    <img src={`https://www.countryflags.io/${code}/flat/32.png`} />&nbsp;
                    {country.toUpperCase()}
                </Typography>
                <Grid container justifyContent="center">
                    <CountryDataCardItem title="Infected" value={confirmed} date={lastUpdate} />
                    <CountryDataCardItem title="Recovered" value={recovered} date={lastUpdate} />
                    <CountryDataCardItem title="Deaths" value={deaths} date={lastUpdate} />
                </Grid>
            </div>
        </div>
    )
}
