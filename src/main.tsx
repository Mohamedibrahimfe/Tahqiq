import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/landing/Home";
import DashBoard from "./pages/dashboard/Overview";
import Profile from "./pages/profile/Profile";
import NoPage from "./pages/NoPage";

import "./index.css";
// context
import { createContext, useState } from "react";
export const Context = createContext();
// context end

// second layout
import Layout from "./layout/home/Layout";
import DashLayout from "./layout/dashboard/DashLayout";
import Tasks from "./pages/dashboard/Tasks";
import Analytics from "./pages/dashboard/Analytics";
import Expenses from "./pages/dashboard/Expenses";
import Overview from "./pages/dashboard/Overview";
export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <BrowserRouter>
      <Context.Provider value={{ darkTheme, setDarkTheme }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<DashLayout />}>
              <Route index element={<Overview />} />
              <Route path="expenses" element={<Expenses />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="profile" element={<Profile />} />
              {/*  */}
              <Route path="*" element={<NoPage />} />
            </Route>
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
