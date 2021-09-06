import React from 'react'
import { Card, CardContent, Typography, Grid } from "@material-ui/core"
import CountUp from 'react-countup'

export const CountryDataCardItem = ({ title = "", value = "Loading...", date = "Loading..." }) => {
    return (
        <Grid item xs={12} md={3}  >
            <Card elevation={0} className="data-cards">
                <CardContent>
                    <Typography >
                        <CountUp start={0} end={value} duration={1} separator="," className="value" />
                    </Typography>
                    <Typography color="textSecondary">
                        {title}
                    </Typography>

                </CardContent>
            </Card>
        </Grid>
    )
}
