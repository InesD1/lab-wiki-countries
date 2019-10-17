import React from 'react';
import countries from "../data/countries.json";
import '../Style/CountryDetail.css';

const CountryDetail = (props) => {
    var countryId = props.match.params.cca3

    var filteredCountry = countries.filter((country)=> country.cca3 === countryId)[0]

    return (
        <div className="country-container">
            <div className="country-name-flag">
                <h1>{filteredCountry.cca3} {filteredCountry.name.official}</h1>
            </div>
            <div className="country-info">
                <p className="info-title">Capital</p>
                <p>{filteredCountry.capital}</p>
            </div>
            <div className="country-info">
                <p className="info-title">Area</p>
                <p>{filteredCountry.area} km²</p>
            </div>
            <div className="country-info">
                <p className="info-title">Borders</p>
                <ul>{filteredCountry.borders.length > 0 ? filteredCountry.borders.map(border => {return <li>{border}</li>} ): "No borders"} </ul>
            </div>
        </div>
    );
}

export default CountryDetail;