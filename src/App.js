import React, { Component } from "react";

import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { DataCards, CountryPicker, Hero } from './components'
import { getTotalData, getCountries, getCountriesData } from "./api";
import "./App.scss"

const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans', "sans-serif"
    ].join(','),
  },
});


export default class App extends Component {
  state = {
    data: {},
    countries: {},
    countryData: {}
  }

  async componentDidMount() {
    const fetchedData = await getTotalData();
    const fetchedCountries = await getCountries();
    const fetchedCountriesData = await getCountriesData();

    this.setState({
      data: fetchedData,
      countries: fetchedCountries,
      countryData: fetchedCountriesData
    })

    // console.log(this.state.countries)
  }

  render() {
    const { data, countries, countryData } = this.state

    return (
      <ThemeProvider theme={theme}>
        <Hero />
        <DataCards data={data} />
        <CountryPicker data={countryData} countries={countries} />
      </ThemeProvider>
    );
  }
}
