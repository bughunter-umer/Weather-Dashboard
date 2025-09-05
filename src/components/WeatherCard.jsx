// export default function WeatherCard({ weather }) {
//   const { name, main, weather: weatherInfo, wind } = weather;
//   const condition = weatherInfo[0].main.toLowerCase();

//   // Background styles based on condition
//   const bgMap = {
//     clear: "from-yellow-300 to-orange-500",
//     clouds: "from-gray-400 to-gray-600",
//     rain: "from-blue-500 to-blue-800",
//     snow: "from-blue-200 to-white",
//     thunderstorm: "from-purple-600 to-indigo-900",
//     drizzle: "from-blue-300 to-blue-500",
//   };

//   const bgClass = bgMap[condition] || "from-green-400 to-blue-600";

//   return (
//     <div
//       className={`bg-gradient-to-br ${bgClass} p-6 rounded-2xl shadow-lg text-center w-80`}
//     >
//       <h2 className="text-2xl font-bold">{name}</h2>
//       <p className="capitalize text-lg">{weatherInfo[0].description}</p>
//       <p className="text-5xl font-extrabold my-2">{main.temp}°C</p>
//       <div className="flex justify-between text-sm mt-4">
//         <p>💧 Humidity: {main.humidity}%</p>
//         <p>💨 Wind: {wind.speed} m/s</p>
//       </div>
//     </div>
//   );
// }
