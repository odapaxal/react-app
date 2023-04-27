import {Outlet, Link} from "react-router-dom";
import Topbar from "./topbar";
import Bottombar from "./bottombar";

export default function Layout() {
    
    return (
        <>
        <Topbar />
        <div className="pageContent">
        <Outlet />
        </div>
        <Bottombar />
        </>
    )
};