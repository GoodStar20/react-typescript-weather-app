import axios from 'axios';

const weatherbitKey = process.env.REACT_APP_WEATHERBIT_KEY;
const weatherbitForecast = 'https://api.weatherbit.io/v2.0/forecast/daily';

export const fetchForecast = async (country: string) => {
  const response = await axios.get(
    `${weatherbitForecast}?city=${country}&key=${weatherbitKey}`
  );
  if (response.status === 200) {
    console.log(response);
    const result = {
      forecast: response.data.data.splice(1, 4),
      tempCelcius: Math.round(response.data.data[0].temp),
      weather: response.data.data[0].weather.description,
      weatherIconCode: response.data.data[0].weather.icon
    };
    return result;
  }
  return;
};
