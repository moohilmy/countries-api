import "./home.css"
import {themeConatext}  from "../../App.jsx";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { searchCountryBySearchBar,searchCountryBySearchBarInRegion } from "../../redex/apicall/countriesApi.js";

const SearchBar = () => {
    const {theme} = useContext(themeConatext)
    const dispath = useDispatch()
    
const searchHandler = (value)=>{
    dispath(searchCountryBySearchBarInRegion(value))
    dispath(searchCountryBySearchBar(value))

}
    return ( 
    <div className="searchInt">
        <i className="bi bi-search"></i> 
        <input className={`${theme}-element search-bar`}
        type="text"
        placeholder="Search for a country..."
        onChange={(e)=>{
            searchHandler(e.target.value)
        }}/>
    </div> 
    );
}
 
export default SearchBar;