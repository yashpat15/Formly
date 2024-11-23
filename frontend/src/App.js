import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import Playground from "./components/Playground";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? "#ffffff" : "#0d1117";
    document.body.style.color = isDarkMode ? "#000000" : "#ffffff";
  };

  return (
    <Router basename="/Formly">
      <div
        className={`min-h-screen flex flex-col ${
          isDarkMode ? "bg-[#0d1117] text-white" : "bg-white text-black"
        }`}
      >
        {/* Header */}
        <header
          className={`flex items-center justify-between px-8 py-4 ${
            isDarkMode ? "bg-[#0d1117]" : "bg-white"
          }`}
        >
          <h1 className="text-2xl font-bold">Formly</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="hover:text-gray-400"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <BsSunFill size={20} /> : <BsMoonFill size={20} />}
            </button>
            <a
              href="https://github.com/yashpat15/Formly/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center text-center">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h2 className="text-5xl font-bold mb-4">
                    Design. Generate. Simplify.
                  </h2>
                  <p
                    className={`text-lg mb-6 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Build your forms effortlessly and generate production-ready
                    code in seconds.
                  </p>
                  <Link
                    to="/playground"
                    className={`px-6 py-3 border font-bold rounded-md transition duration-200 ${
                      isDarkMode
                        ? "bg-transparent border-white text-white hover:bg-white hover:text-black"
                        : "bg-transparent border-black text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    Playground
                  </Link>
                </>
              }
            />
            <Route
              path="/playground"
              element={<Playground isDarkMode={isDarkMode} />}
            />
          </Routes>
        </main>

        {/* Footer */}
        <footer
          className={`py-4 ${
            isDarkMode ? "bg-[#0d1117]" : "bg-white"
          } text-center`}
        >
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            &copy; 2024 Formly. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
