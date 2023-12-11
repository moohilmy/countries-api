
import { useContext } from "react";
import {themeConatext}  from "../../App.jsx";
import { Link } from "react-router-dom";


const BorderCountries = ({borderCountriesName}) => {
    const {theme} = useContext(themeConatext)
    return (
    <div className="border-countries">
    
    <span>Border Countries:</span>

            {
                borderCountriesName?.map((c,index)=> (<Link key={index+2} to={`/country/${c}`} className={`${theme}-element border-box`}>{c}</Link>))
            }
    </div>
);
}
 
export default BorderCountries;