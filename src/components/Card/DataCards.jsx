import React from 'react'
import { DataCardItem } from './DataCardItem'
import { Grid } from "@material-ui/core"
import "./DataCards.scss"

export const DataCards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    return (
        <div className="covid-cards">
            <div className="container">
                <Grid container justifyContent="center">
                    <DataCardItem title="Infected" value={confirmed} date={lastUpdate} />
                    <DataCardItem title="Recovered" value={recovered} date={lastUpdate} />
                    <DataCardItem title="Deaths" value={deaths} date={lastUpdate} />
                </Grid>
            </div>
        </div>
    )
}
