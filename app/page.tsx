"use client";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

export default function HomePage() {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [locationTitle, setLocationTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city: string) => {
    try {
      setLoading(true);
      setError("");
      setWeatherData([]);

      // 1. Find location ID from city name
      const searchRes = await fetch(
        `https://www.metaweather.com/api/location/search/?query=${city}`
      );
      const locations = await searchRes.json();

      if (locations.length === 0) {
        setError("City not found");
        setLoading(false);
        return;
      }

      const woeid = locations[0].woeid;
      setLocationTitle(locations[0].title);

      // 2. Get weather forecast by WOEID
      const weatherRes = await fetch(
        `https://www.metaweather.com/api/location/${woeid}/`
      );
      const data = await weatherRes.json();
      setWeatherData(data.consolidated_weather);
    } catch (err) {
      setError("Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold my-6">🌤 Weather App</h1>
      <SearchBar onSearch={fetchWeather} />

      {loading && <p className="mt-6">Loading...</p>}
      {error && <p className="mt-6 text-red-500">{error}</p>}

      {locationTitle && (
        <h2 className="text-2xl font-semibold mt-6">{locationTitle}</h2>
      )}

      <div className="flex flex-wrap justify-center mt-6">
        {weatherData.map((day) => (
          <WeatherCard key={day.id} weather={day} />
        ))}
      </div>
    </main>
  );
}
