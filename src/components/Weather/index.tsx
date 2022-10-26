import React from 'react';
import { WeatherIcons } from '../../utils/weatherIcons';

import './styles.scss';

type Props = {
  tempCelcius: number;
  weather: string;
  weatherIconCode: string;
};
type TWeatherIcon = {
  [key: string]: string;
};
const weatherIcons: TWeatherIcon = WeatherIcons;

class Weather extends React.Component<Props> {
  render() {
    return (
      <div className="text-center today-content">
        <div className="p-5">
          <span>Today</span>
          <div className="d-flex justify-content-center mt-4">
            <i
              className={`wi ${
                weatherIcons[this.props.weatherIconCode]
              } weather-icon`}
            />
            <div className="d-flex flex-column ms-4 align-items-start">
              <span className="degress">{`${this.props.tempCelcius}°`}</span>
              <span>{this.props.weather}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
