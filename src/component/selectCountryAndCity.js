import React, { useState } from 'react';

const SelectCity = (props) => {

    const { selectCity, setSelectCity, cities, count } = props;
    return (
        <select key={count} onChange={(e) => setSelectCity(e.target.value)}>
            <option disabled selected value >Please select a city</option>
            {cities.map((item, index) => (<option key={index} value={item}>{item} </option>))}
        </select>
    );
};

const SelectCountry = (props) => {
    const { selectCountry, setSelectCountry, countries } = props;
    const [c, setC] = useState(1);
    return (
        <select onChange={(e) => setSelectCountry(e.target.value)}>
            <option disabled selected value>Please select a country</option>
            {countries.map((item, index) => (<option key={index} value={item}>{item}</option>))}
        </select>
    );
};

export default function SelectCountryAndCity(props) {
    const countriesAndCities = {
        Israel: ['Jerusalem', 'Tel Aviv', 'Raanana'],
        USA: ['New York', 'Woshington'],
        Denemark: ['Kopenhagen', 'Hilrud', 'Olburg']
    }
    const { city, country, page } = props;

    const [selectCountry, setSelectCountry] = useState(null);
    const [selectCity, setSelectCity] = useState(null);
    const [count, setCount] = useState(0);

    const countries = Object.keys(countriesAndCities);
    const cities = countriesAndCities[selectCountry];

    function replaceCountry(newCountry) {
        setSelectCountry(newCountry)
        setSelectCity(null)
        setCount(count + 1)
    }

    function sendDetails() {
        city(selectCity)
        country(selectCountry)
        page(3)
    }

    return (
        <>
            <div>

                <p>You selected {selectCountry} / {selectCity}</p>

                <SelectCountry
                    countries={countries}
                    selectCountry={selectCountry}
                    setSelectCountry={replaceCountry}
                />
                {cities &&
                    <SelectCity
                        cities={cities}
                        selectCity={selectCity}
                        setSelectCity={setSelectCity}
                        count={count}
                    />}

            </div>
            <button onClick={sendDetails}>ok</button>
        </>
    );
}