// // src/components/ThemeToggle.jsx
// import { useEffect, useState } from "react";

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "light"
//   );

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//     >
//       {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
//     </button>
//   );
// }
