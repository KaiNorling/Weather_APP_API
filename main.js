 const formElement = document.querySelector('.form')
 const inputElement = document.querySelector('.input')
 const tbodyElement = document.querySelector('.tbody')
 const cityZoneElement = document.querySelector('.cityZone')

 formElement.addEventListener('submit', event => {
     event.preventDefault()
     console.log(event);
     const cityName = inputElement.value
     console.log(cityName);

     async function getInfo() {
         let response = await fetch(`https://goweather.herokuapp.com/weather/${cityName}`)
         let jsonVersion = await response.json()
         cityZoneElement.textContent = cityName
 
         console.log(jsonVersion);

         for (let data in jsonVersion) {
             console.log(data, jsonVersion[data]); 
        
             const newTrElement = document.createElement('tr')
             const newNameElement = document.createElement('td')
             const newTimeElement = document.createElement('td')
             newNameElement.textContent = data
             newTimeElement.textContent = jsonVersion[data]
             newTrElement.appendChild(newNameElement)
             newTrElement.appendChild(newTimeElement)
             tbodyElement.appendChild(newTrElement)

           
         }
 
     }


     getInfo()




 })