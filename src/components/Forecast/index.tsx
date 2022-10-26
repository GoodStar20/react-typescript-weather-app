import React from 'react';
import moment from 'moment';

import { WeatherIcons } from '../../utils/weatherIcons';
import './styles.scss';

type Props = {
  tempCelcius: number;
  weatherIconCode: string;
  dayCode: number;
};
type TWeatherIcon = {
  [key: string]: string;
};
type TDay = {
  [key: number]: string;
};
const weatherIcons: TWeatherIcon = WeatherIcons;
const day: TDay = {
  0: 'SUN',
  1: 'MON',
  2: 'TUE',
  3: 'WED',
  4: 'THU',
  5: 'FRI',
  6: 'SAT'
};

class Forecast extends React.Component<Props> {
  render() {
    return (
      <div className="d-flex flex-column align-items-center week-content py-4">
        <span>{day[moment(this.props.dayCode).day()]}</span>
        <i
          className={`wi weather-icon ${
            weatherIcons[this.props.weatherIconCode]
          } mt-3`}
        />
        <span className="degress mt-2">{this.props.tempCelcius}°</span>
      </div>
    );
  }
}

export default Forecast;
