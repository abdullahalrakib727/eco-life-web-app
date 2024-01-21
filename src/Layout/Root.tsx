import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";


const Root = () => {
    return (
        <div className="font-openSans max-w-[1440px] mx-auto">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;