import React from 'react'
import { Card, CardContent, Typography, Grid } from "@material-ui/core"
import CountUp from 'react-countup'

export const DataCardItem = ({ title, value = "Loading...", date = "Loading..." }) => {
    return (
        <Grid item xs={12} md={3} className="data-cards" >
            <Card elevation={0} >
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography >
                        <CountUp start={0} end={value} duration={1} separator="," className="value " />
                    </Typography>
                    <Typography color="textSecondary">
                        {new Date(date).toDateString()}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
