// import { useState } from "react";

// export default function SearchBar({ onSearch }) {
//   const [city, setCity] = useState("");

//   // Use city + country code for accuracy
//   const popularCities = [
//     { name: "London", query: "London,GB" },
//     { name: "New York", query: "New York,US" },
//     { name: "Islamabad", query: "Islamabad,PK" },
//     { name: "Paris", query: "Paris,FR" },
//     { name: "Tokyo", query: "Tokyo,JP" },
//     { name: "Dubai", query: "Dubai,AE" },
//   ];

//   const handleSearch = () => {
//     if (city.trim() !== "") {
//       onSearch(city);
//       setCity("");
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <div className="flex flex-col items-center gap-4 mb-6 w-full max-w-md">
//       {/* Input + Button */}
//       <div className="flex w-full gap-2">
//         <input
//           type="text"
//           placeholder="Enter city name"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           onKeyDown={handleKeyPress}
//           className="flex-1 px-4 py-2 rounded-lg border text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
//         />
//         <button
//           onClick={handleSearch}
//           className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
//         >
//           Search
//         </button>
//       </div>

//       {/* Popular Cities */}
//       <div className="flex flex-wrap justify-center gap-2">
//         {popularCities.map((c) => (
//           <button
//             key={c.name}
//             onClick={() => onSearch(c.query)}
//             className="bg-white text-black px-3 py-1 rounded-full shadow hover:bg-gray-200 transition"
//           >
//             {c.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }
