// src/App.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiThermometer,
} from "react-icons/wi";

export default function App() {
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("Islamabad");
  const [query, setQuery] = useState("Islamabad");

  const fetchWeather = async (cityName) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      const daily = res.data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      setForecast(daily);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setForecast([]);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const getWeatherIcon = (condition) => {
    const c = condition.toLowerCase();
    if (c.includes("rain")) return <WiRain className="text-blue-500 text-6xl" />;
    if (c.includes("cloud")) return <WiCloud className="text-gray-500 text-6xl" />;
    if (c.includes("clear")) return <WiDaySunny className="text-yellow-400 text-6xl" />;
    return <WiThermometer className="text-red-500 text-6xl" />;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      setCity(query);
    }
  };

  return (
    <div className="min-h-screen w-[98vw] bg-gradient-to-br from-gray-600 via-blue-400 to-green-300 px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg text-center w-full">
        🌍 Weather Dashboard
      </h1>

      {/* Search Box */}
      <form
        onSubmit={handleSearch}
        className="flex flex-wrap justify-center items-center gap-2 mb-10 w-full max-w-4xl mx-auto"
      >
        <input
          type="text"
          placeholder="Enter city name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 text-white
           py-3 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-black font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Forecast Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
        {forecast.length > 0 ? (
          forecast.map((day, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <h3 className="font-semibold text-gray-700 text-sm mb-3">
                {new Date(day.dt_txt).toDateString()}
              </h3>
              <div className="flex justify-center mb-3">
                {getWeatherIcon(day.weather[0].main)}
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {Math.round(day.main.temp)}°C
              </p>
              <p className="text-sm capitalize text-gray-500">
                {day.weather[0].description}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-5 text-red-700 font-semibold">
            ❌ City not found. Try another.
          </p>
        )}
      </div>

{/* Temperature Graph */}
{forecast.map((day, i) => (
  <div key={i} className="bg-white/90 p-6 rounded-2xl shadow-lg mb-8 relative">
    <h3 className="font-bold text-gray-700 text-center mb-4">
      {new Date(day.dt_txt).toDateString()}
    </h3>

    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        data={[{
          time: new Date(day.dt_txt).toLocaleTimeString(),
          temp: day.main.temp,
          weather: day.weather[0].main,
        }]}
      >
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="temp" stroke="#2563eb" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>

    {/* Tree and House at bottom */}
    <div className="absolute bottom-2 left-4 text-4xl">🌳</div>
    <div className="absolute bottom-2 right-4 text-4xl">🏡</div>

    {/* Raining effect overlay */}
    {day.weather[0].main.toLowerCase().includes("rain") && (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, idx) => (
          <div
            key={idx}
            className="absolute top-0 w-1 h-4 bg-blue-400 animate-rain"
            style={{ left: `${Math.random() * 100}%`, animationDelay: `${idx * 0.2}s` }}
          />
        ))}
      </div>
    )}
  </div>
))}


    </div>
  );
}
