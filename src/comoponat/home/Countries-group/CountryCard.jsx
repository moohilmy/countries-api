import { useContext } from "react";
import  {themeConatext}  from "../../../App.jsx";
import { Link } from "react-router-dom";

const CountryCard = ({country}) => {
    const {theme} = useContext(themeConatext)
    return (
        <Link to={`country/${country?.name}`}>
        <div className={`country-card ${theme}-element`}>
            <div className="imgBox">
                <img src={country?.flags.png} alt="" />
            </div>
            <div className="country-info">
                <h2 className="country-name">{country?.name}</h2>
                <ul>
                    <li><span>population:</span>{country?.population}</li>
                    <li><span>region:</span>{country?.region}</li>
                    <li><span>capital:</span>{country?.capital}</li>
                </ul>
            </div>
        </div>
        </Link>
     );
}

export default CountryCard;