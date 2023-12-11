import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./country-details.css"
import {  getCountriesBorder, getCountriesBorderName, getCountrybyname } from "../../redex/apicall/countriesApi.js";
import { useContext } from "react";
import {themeConatext}  from "../../App.jsx";
import BorderCountries from "./BorderCountries.jsx";

const CountryDetails = () => {
    const {theme} = useContext(themeConatext)

    const {country,borderCountriesName,borderCountries} = useSelector(state => state.countries)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {countryId} = useParams()

    useEffect(()=>{
        dispatch(getCountrybyname(countryId))
        dispatch(getCountriesBorder())
        dispatch(getCountriesBorderName())
        
    },[countryId,dispatch])
    
    let languagesLength = country[0]?.languages.length
    
    return (
        <section className={`countrol-page section-details  ${theme}-theme-background`}>
        
        <div className="nav-bar">
            <div className={`back-btn ${theme}-element`} onClick={()=> navigate("/")}>
            <i className="bi bi-arrow-left"></i><span>back</span>
            </div>
        </div>
    <div className={`country-home`}>
        <div className="img-box"><img src={`${country[0]?.flags.svg}`} alt="" className="country-img" /></div>
        <div className="country-detalils-info">
            <h1 className="country-name">{country[0]?.name}</h1>
        <div className="info-countainer">
            <ul className="info-list">
                <li><strong>native name:</strong> {country[0]?.nativeName}</li>
                <li><strong>population:</strong> {country[0]?.population}</li>
                <li><strong>region:</strong> {country[0]?.region}</li>
                <li><strong>sub region:</strong> {country[0]?.subregion}</li>
                <li><strong>capital:</strong> {country[0]?.capital}</li>
            </ul>
            <ul className="info-list">
                <li><strong>top level domain:</strong> {country[0]?.topLevelDomain}</li>
                <li><strong>currencies:</strong> {country[0]?.currencies && (country[0]?.currencies[0]?.name)}</li>
                <li><strong>languages:</strong> {country[0]?.languages?.map((l,i)=> i + 1 < languagesLength ? `${l.name}, ` : l.name )}</li>
            </ul>
        </div>
        {
          borderCountries?.length !== 0 &&(<BorderCountries borderCountriesName={borderCountriesName} />)            
        }
        </div>
    </div> 
        </section>
    );
}
 
export default CountryDetails;