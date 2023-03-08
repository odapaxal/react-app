import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./pages/topbar.js";
import Data from './pages/vask';
import './index.css';

const PageContent = () => {
    return (
        <>
    <Data />
    </>
    )
};


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<PageContent />)