import { useState,useContext } from "react";
import {themeConatext}  from "../../App.jsx";
import { useDispatch } from "react-redux";
import { clearSearchBarInRegion, getCountriesbyRegion,clearSearchBarValue} from "../../redex/apicall/countriesApi.js";


const RegionSelect = () => {
    const dispatch = useDispatch()
    const [isActive, setisActive] = useState(false);
    const Regions = ["All","Africa","Americas","Asia","Europe","Oceania"]
    const [regionSelector, setRegionSelector] = useState("Filter by Region");
    const {theme} = useContext(themeConatext)
    return ( 
        <div onClick={()=> setisActive(!isActive)} className={`select ${theme}-element`}>
        <span>{regionSelector}</span>   {isActive? <i className="bi bi-caret-up-fill"></i> : <i className="bi bi-caret-down-fill"></i>}
    {isActive && (
    <ul className={`${theme}-element`} name="" id="">
        {Regions.map((region,index)=>(
            <li key={index + 1} value={region} onClick={()=> {setRegionSelector(region)
            dispatch(getCountriesbyRegion(region))
            dispatch(clearSearchBarInRegion())
            dispatch(clearSearchBarValue())
            region == "All" && setRegionSelector("Filter by Region")
            }}>
                {region}
            </li>
        ))}
    </ul>
    )}
        </div>
     );
}
 
export default RegionSelect;