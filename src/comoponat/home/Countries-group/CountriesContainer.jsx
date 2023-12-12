import NotFound from "../../NotFound.jsx";
import CountryCard from "./CountryCard.jsx";
import "./countries-container.css"
import { useSelector } from "react-redux";
const CountriesCountainer = () => {
    const {countriesByRegion,countriesBySearchBar,countriesByRegionInSearch} = useSelector(state=> state.countries)
    return ( 
        <div className="countries-container">
            {
                
                countriesBySearchBar.length == 0 && countriesByRegionInSearch.length == 0 ?
                <NotFound/>
                :
                countriesByRegionInSearch.length > 0 && countriesByRegion.length > 0 ?
                countriesByRegionInSearch.map(country =>(
                    <CountryCard key={country.name} country={country}/>
                    ))
                :
                countriesByRegionInSearch.length == 0  && countriesBySearchBar.length < countriesByRegion.length?
                <NotFound/>
                :
                countriesByRegion.length > 0 && countriesByRegionInSearch.length == 0 ?
                countriesByRegion.map(country =>(
                    <CountryCard key={country.name} country={country}/>
                    ))
                    :
                countriesBySearchBar.map(country =>(
                    <CountryCard key={country.name} country={country}/>
                ))
            }
            
        </div>
    );
}

export default CountriesCountainer;