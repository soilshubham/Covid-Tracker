import React from 'react'
import { Card, CardContent, Typography, Grid } from "@material-ui/core"
import './Hero.scss'

export const Hero = () => {
    return (
        <div className="covid-hero-section">
            <Typography variant="h3" align="center" className="heading" >
                COVID TRACKER {new Date().getFullYear()}
            </Typography>
            <Typography variant="subtitle1" align="center">
                This application provides data on Covid-19 cases.
            </Typography>
        </div>
    )
}
