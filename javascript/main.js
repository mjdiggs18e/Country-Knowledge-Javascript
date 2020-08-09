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