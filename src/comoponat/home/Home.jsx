import "./home.css"
import SearchBar from "./SearchBar.jsx"
import RegionSelect from "./RegionSelect.jsx"
import  {themeConatext}  from "../../App.jsx";
import CountriesCountainer from "./Countries-group/CountriesContainer.jsx";
import { useContext } from "react";
const Home = () => {
    const {theme} = useContext(themeConatext)
    return (
        <section className={`${theme}-theme-background home countrol-page`} >
            <div className="nav-bar">
                <SearchBar />
                <RegionSelect />
            </div>
            <CountriesCountainer/>
        </section>
     );
}
 
export default Home;