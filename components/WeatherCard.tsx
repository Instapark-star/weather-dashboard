interface WeatherCardProps {
  weather: any; // MetaWeather API response for a single day
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  const iconUrl = `https://www.metaweather.com/static/img/weather/png/64/${weather.weather_state_abbr}.png`;

  return (
    <div className="bg-gray-900 text-white rounded-xl p-4 shadow-lg flex flex-col items-center w-40 mx-2 transition-transform transform hover:scale-105">
      <h3 className="font-semibold text-lg">{weather.applicable_date}</h3>
      <img src={iconUrl} alt={weather.weather_state_name} className="w-16 h-16" />
      <p className="mt-2">{weather.weather_state_name}</p>
      <p className="mt-1">
        {Math.round(weather.min_temp)}°C / {Math.round(weather.max_temp)}°C
      </p>
      <p className="mt-1">Wind: {Math.round(weather.wind_speed)} km/h</p>
      <p>Humidity: {weather.humidity}%</p>
    </div>
  );
}
