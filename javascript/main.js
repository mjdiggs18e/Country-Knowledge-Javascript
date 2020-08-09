const countryEntry = document.querySelector('.countryName');
const countrySearch = document.querySelector('.getCountry');
const loading = document.querySelector('.loader');
const error = document.querySelector('.error');
loading.style.display = "None"


countrySearch.addEventListener('click', () => {
    let result = countryEntry.value;
    if(result === "") {
        error.innerHTML = "Country name can't be empty!"; 
        setTimeout(function(){ 
        error.innerHTML = ""; 
    }, 1500);
    } else {
        loading.style.display = "Block"
        findCountry(result);
    }
})

const findCountry = name => {

    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => {
        return response.json();
    })
    .then(data => {

            loading.style.display = "None"
            let country = document.querySelector('.country-holder');
            let countryInfo = document.querySelector('.country-display');
            let newCurrency = [];
            let newLanguage = [];

            for(let i = 0; i < data[0].currencies.length; i++) {
                newCurrency.push(data[0].currencies[i].name);
            }
            
            for(let i = 0; i < data[0].languages.length; i++) {
                newLanguage.push(data[0].languages[i].name);
            }
            
            countryInfo.innerHTML = 
            `
            <div class="country-div">
            <h3>Name</h3>
            <p class="country-name">${data[0].name}</p>
            </div>
            <div class="country-div">
            <h3>Capital</h3>
            <p class="country-capital">${data[0].capital}</p>
            </div>
            <div class="country-div">
            <img src="${data[0].flag}" class="country-flag"></img>
            </div>
            <div class="country-div">
            <h3>Region</h3>
            <p class="country-region">${data[0].region}</p>
            </div>
            <div class="country-div">
            <h3>Sub-region</h3>
            <p class="country-subregion">${data[0].subregion}</p>
            </div>
            <div class="country-div">
            <h3>Population</h3>
            <p class="country-population">${numberWithCommas(data[0].population)}</p>
            </div>
            <div class="country-div">
            <h3>Latitude & Longitude</h3>
            <p class="country-latlng">${data[0].latlng}</p>
            </div>
            <div class="country-div">
            <h3>Demonym</h3>
            <p class="country-demonym">${data[0].demonym}</p>
            </div>
            <div class="country-div">
            <h3>Timezones</h3>
            <p class="country-timezones">${data[0].timezones}</p>
            </div>
            <div class="country-div">
            <h3>Native Name</h3>
            <p class="country-nativename">${data[0].nativeName}</p>
            </div>
            <div class="country-div">
            <h3>Numeric Code</h3>
            <p class="country-numericCode">${data[0].numericCode}</p>
            </div>
            <div class="country-div">
            <h3>Currencies</h3>
            <p class="country-currencies">${newCurrency}</p>
            </div>
            <div class="country-div">
            <h3>Languages</h3>
            <p class="country-languages">${newLanguage}</p>
            </div>
            `
    
            country.appendChild(countryInfo);
    })
    .catch(err => {
        error.innerHTML = "Country wasn't found!"; 
        setTimeout(function(){ 
        error.innerHTML = ""; 
    }, 1500);
    })
}


    
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    const countryList = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands",
        "Colombia",
        "Comoros ",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (Democratic People's Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom of Great Britain and Northern Ireland",
        "United States Minor Outlying Islands",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
        "Åland Islands"
    ];
    
for(let i = 0; i < countryList.length; i++) {
    let countries = countryList[i];

    let option = document.createElement('option');
    let list = document.querySelector('#countries');

    option.value = countries;
    list.appendChild(option);

}