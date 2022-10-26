import React from 'react';

import Header from './components/Header';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import { fetchForecast } from './apis/weather';

import './App.scss';

class App extends React.Component {
  state = {
    country: 'OTTAWA',
    todayWeather: {
      forecast: [],
      tempCelcius: 0,
      weather: '',
      weatherIconCode: ''
    }
  };

  componentDidMount() {
    this.fetchWeather(this.state.country);
    setInterval(() => {
      this.fetchWeather(this.state.country);
    }, 600000);
  }

  selectCountry = (value: string) => {
    this.setState({ country: value });
    this.fetchWeather(value);
  };

  fetchWeather = async (country: string) => {
    const result = await fetchForecast(country);
    if (result) {
      this.setState({ todayWeather: result });
    }
  };
  render() {
    return (
      <div className="App container">
        <Header
          country={this.state.country}
          selectCountry={this.selectCountry}
        />
        <div className="content">
          <Weather
            tempCelcius={this.state.todayWeather.tempCelcius}
            weather={this.state.todayWeather.weather}
            weatherIconCode={this.state.todayWeather.weatherIconCode}
          />
          <div className="row w-100">
            {this.state.todayWeather.forecast?.length > 0 &&
              this.state.todayWeather.forecast.map(
                (data: any, index: number) => (
                  <div className="col-md-3 w-100 forecast-item" key={index}>
                    <Forecast
                      weatherIconCode={data.weather?.icon}
                      tempCelcius={data.temp}
                      dayCode={data.datetime}
                    />
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
