import React from 'react'
import { Typography, Link } from "@material-ui/core"
import './Hero.scss'

export const Hero = () => {
    return (
        <div className="covid-hero-section">
            <Typography variant="h3" align="center" className="heading" >
                COVID TRACKER {new Date().getFullYear()}
            </Typography>
            <Typography align="center" className="subheading">
                This website provides you with global as well as country based daily reports on Covid-19.
            </Typography>
            <Typography align="center">
                <Link href="https://linktr.ee/soilshubham" variant="subtitle1" target="_blank">
                    Sahil Shubham
                </Link>
                {" "}|{" "}
                <Link href="https://github.com/soilshubham/Covid-Tracker" variant="subtitle1" target="_blank">
                    GitHub
                </Link>
            </Typography>
        </div>
    )
}
