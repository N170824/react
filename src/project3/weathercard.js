import { useEffect, useState } from "react";

export const WeatherCard = () => {
  const [weather, setWeather] = useState(null); // store the weather object
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
          );
          const data = await response.json();
          setWeather(data.current_weather);
        } catch (err) {
          setError("Failed to fetch weather data");
          console.error(err);
        }
      },
      (err) => {
        setError("Permission denied or unable to retrieve location");
        console.error(err);
      }
    );
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weather) {
    return <div>Loading weather...</div>;
  }

  return (
    <>
        <div style={{
        border: "1px solid #ccc",
        padding: "20px",
        width: "300px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif"
        }}>
        <h3>Current Weather</h3>
        <p><strong>Temperature:</strong> {weather.temperature}°C</p>
        <p><strong>Wind Speed:</strong> {weather.windspeed} km/h</p>
        <p><strong>Wind Direction:</strong> {weather.winddirection}°</p>
        <p><strong>Time:</strong> {new Date(weather.time).toLocaleString()}</p>
        <p><strong>Condition Code:</strong> {weather.weathercode}</p>
        </div>
    </>
  );
};
