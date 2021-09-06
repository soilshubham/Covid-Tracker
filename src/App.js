import React, { Component } from "react";

import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { DataCards, Chart, Hero } from './components'
import { getTotalData } from "./api";
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
  }


  async componentDidMount() {
    const fetchedData = await getTotalData();
    this.setState({
      data: fetchedData
    })
    console.log(this.state.data)
  }

  render() {
    const { data } = this.state
    return (
      <ThemeProvider theme={theme}>
        <Hero />
        <DataCards data={data} />
      </ThemeProvider>
    );
  }
}
