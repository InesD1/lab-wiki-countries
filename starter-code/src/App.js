import React from 'react';
import './Style/App.css';
import {Link, Route} from 'react-router-dom';
import countries from "./data/countries.json";
import CountryDetail from "./Components/CountryDetail";
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="country-info-container">
        <div className="sidebar">
          {countries.map((country)=> 
              <Link className="link" to={`/country-detail/${country.cca3}`}>
                {country.flag} {country.name.official}
              </Link>
            )
          }      
        </div>
          <div className="country-detail-container">
            <Route path="/country-detail/:cca3" component={CountryDetail} />
          </div>
        </div>
    </div>
  );
}

export default App;
