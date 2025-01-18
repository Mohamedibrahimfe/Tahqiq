import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/landing/Home";
import DashBoard from "./pages/dashboard/DashBoard";
import Profile from "./pages/profile/Profile";
import NoPage from "./pages/NoPage";

import "./index.css";
// context
import { createContext, useState } from "react";
export const Context = createContext();
// context end
export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <BrowserRouter>
      <Context.Provider value={{ darkTheme, setDarkTheme }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Failed to find the root element");
}
