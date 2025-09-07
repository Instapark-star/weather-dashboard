"use client";

import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const getWeather = async () => {
    if (!city) return;

    const apiKey = "process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY"; // replace with real key
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();

    if (data.cod === 200) {
      setWeather(data);
    } else {
      setWeather(null);
      alert("City not found!");
    }
  };

  const renderIcon = (main: string) => {
    switch (main) {
      case "Clear":
        return <WiDaySunny size={64} className="text-yellow-400" />;
      case "Clouds":
        return <WiCloud size={64} className="text-gray-400" />;
      case "Rain":
        return <WiRain size={64} className="text-blue-400" />;
      case "Thunderstorm":
        return <WiThunderstorm size={64} className="text-purple-600" />;
      case "Snow":
        return <WiSnow size={64} className="text-blue-200" />;
      case "Fog":
      case "Mist":
      case "Haze":
        return <WiFog size={64} className="text-gray-300" />;
      default:
        return <WiCloud size={64} className="text-gray-400" />;
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Weather Dashboard</h1>

      <div className="flex gap-2 w-full max-w-md">
        <Input
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button onClick={getWeather}>Search</Button>
      </div>

      {weather && (
        <Card className="mt-8 w-full max-w-md shadow-lg">
          <CardHeader>
            <h2 className="text-2xl font-semibold">
              {weather.name}, {weather.sys.country}
            </h2>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            {renderIcon(weather.weather[0].main)}
            <p className="text-5xl font-bold">{Math.round(weather.main.temp)}°C</p>
            <p className="text-lg capitalize">{weather.weather[0].description}</p>
            <div className="flex justify-between w-full text-sm text-gray-600">
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind: {weather.wind.speed} m/s</p>
            </div>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
