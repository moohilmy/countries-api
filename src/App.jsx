import { createContext,useState } from 'react'
import Header from './comoponat/header/Header.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './comoponat/home/Home.jsx'
import CountryDetails from './comoponat/countryDetails/CountryDetails.jsx'
import { Provider } from 'react-redux'
import store from './redex/store.js'


export const themeConatext = createContext(null)
function App() {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? 'dark' : 'light'
  return (
    <Provider store={store}>
    <BrowserRouter>
      <themeConatext.Provider value={{isDark,setIsDark,theme}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="country/:countryId" element={<CountryDetails />}/>
        </Routes>
      </themeConatext.Provider>
    </BrowserRouter>
    </Provider>
  )
}

export default App
