import { useContext } from "react";
import "./header.css"
import {themeConatext} from "../../App.jsx";

const Header = () => {
    const {isDark,setIsDark,theme} = useContext(themeConatext)
    return ( 
        <header className={`${theme}-element countrol-page`}>
            <h1 className="logo">Where in the world?</h1>
            <button id="modebtn" className={`${theme}-theme-btn btn`} onClick={()=>{setIsDark(!isDark)}}>{isDark? <i className="bi bi-moon-fill"> Dark mode</i> : <i className="bi bi-sun"> Light mode</i> }</button>
        </header>
     );
}
 
export default Header;