import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Chart from 'chart.js/auto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import History from "./VersionHistory"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/history" element={<History />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

