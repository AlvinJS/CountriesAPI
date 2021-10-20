
let nations = [];
let filteredNations =[];

// array of all Countries from API
async function getCountries(){
    let response = await fetch("https://restcountries.com/v3.1/all"); 
    let countries = await response.json();
    
    let i = null;
    
   for(i=0;i<countries.length;i++){ 
    let {name,capital,region,population,flags} = countries[i];
    
     let country = {
        
        name: name.common,
        capital: capital,
        region: region,
        population: population,
        flag: flags.svg
        }

    nations.push(country);
    }

    showCountries(nations);
}

// array of filtered Countries from API
async function filterByRegion(){
    
    
    let response = await fetch(`https://restcountries.com/v3.1/region/${filterCountries.value}`);
   

   let filtered = await response.json();
   
   let i = null;
   filteredNations = [];

  for(i=0;i<filtered.length;i++){ 
   let {name,capital,region,population,flags} = filtered[i];
   
    let country = {
       
       name: name.common,
       capital: capital,
       region: region,
       population: population,
       flag: flags.svg
       }

   filteredNations.push(country);
   }
   showCountries(filteredNations);
   console.log(filteredNations);
   console.log(filterCountries.value);
}


//array of searched Countries from API
async function searchForCountry(){
    let response = await fetch(`https://restcountries.com/v3.1/name/${searchBar.value}`);
   

    let filtered = await response.json();
    
    let i = null;
    filteredNations = [];
 
   for(i=0;i<filtered.length;i++){ 
    let {name,capital,region,population,flags} = filtered[i];
    
     let country = {
        
        name: name.common,
        capital: capital,
        region: region,
        population: population,
        flag: flags.svg
        }
 
    filteredNations.push(country);
    }

    showCountries(filteredNations);
    console.log(filteredNations);
    console.log(filterCountries.value);
} 


//DOM
function showCountries(updatedData){
// reinitialize main content



const gallery = document.getElementById("countryContainer");

gallery.innerHTML ="";

//update DOM Interface

updatedData.forEach( country => {
    // creating card div
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("max-w-sm", "rounded-lg", "shadow-md", "bg-white");
    // creating country info div
    const infoDiv =document.createElement("div");
    infoDiv.classList.add("p-10", "text-left");
    //create new image element
    const img = document.createElement("img");
    img.classList.add("w-full", "rounded-t-md");
    img.src = country.flag;

    //country name
    const countryName = document.createElement("h3");
    countryName.classList.add("text-md", "font-bold", "mb-4");
    countryName.innerHTML = `${country.name}`;

    //population
    const numOfPeople = document.createElement("p");
    numOfPeople.innerHTML =`<span class="font-semibold"> Population:</span> ${country.population.toLocaleString("en")}`;

    //region
    const reg = document.createElement("p");
    reg.innerHTML =`<span class="font-semibold"> Region:</span> ${country.region}`;

    //capital
    const city = document.createElement("p");
    city.innerHTML =`<span class="font-semibold"> Capital:</span> ${country.capital}`;

    //Adding elements together
     infoDiv.appendChild(countryName);
     infoDiv.appendChild(numOfPeople);
     infoDiv.appendChild(reg);
     infoDiv.appendChild(city);
     
     cardDiv.appendChild(img);
     cardDiv.appendChild(infoDiv);

     gallery.appendChild(cardDiv);

     

});

}





window.addEventListener("load",getCountries);
console.log(nations);

filterCountries.addEventListener("change",filterByRegion);

searchBar.addEventListener("keypress",searchForCountry);





