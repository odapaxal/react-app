import ReactDOM from "react-dom/client";
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdapterDayjs } from '../node_modules/@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '../node_modules/@mui/x-date-pickers/LocalizationProvider';
import Layout from "./pages/layout.js";
import Home from "./pages/home.js";
import Hei from "./pages/om_oss.js";
import Vaskeliste from './pages/vask';
import Innlogging from './pages/innloggingReact';
import Vaskevalg from "./pages/vaskevalg.js";
import ResponsiveDateTimePickers from "./pages/tidvalg.js";
import './index.css';

 
export default function App() {
    const [bestillingtid,setBestillingtid] = useState(null);
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="om oss" element={<Hei />} />
                    <Route path="innlogging" element={<Innlogging />} />
                    <Route path="vaskeliste" element={<Vaskeliste />} /> 
                    <Route path="vaskevalg" element={<Vaskevalg />}/>
                    <Route path="tidvalg" element={<ResponsiveDateTimePickers />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </LocalizationProvider>
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />)