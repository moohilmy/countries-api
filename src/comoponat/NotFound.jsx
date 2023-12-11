import { useContext } from "react";
import {themeConatext}  from "../App.jsx";


const NotFound = () => {
    const {theme} = useContext(themeConatext)

    return (
        <div className={`not-found-page ${theme}-theme-background`}>
            <i className="bi bi-globe-americas"></i>
            <p>
                this country not found
            </p>
        </div>
    );
}
 
export default NotFound;