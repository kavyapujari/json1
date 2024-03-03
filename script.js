const citiesContainer = document.getElementById('cities-container');

fetch('https://api.npoint.io/7bbd3a59c401f616bb89')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    data.places.forEach(city => {
      const cityCard = document.createElement('div');
      cityCard.classList.add('city-card');

      const cityImage = document.createElement('img');
      cityImage.classList.add('city-image');
      cityImage.src = city.image;
      cityImage.alt = city.name;

      const cityName = document.createElement('h2');
      cityName.classList.add('city-name');
      cityName.textContent = city.name;

      const cityInfo = document.createElement('p');
      cityInfo.classList.add('city-info');
      cityInfo.textContent = city.info;

      cityCard.appendChild(cityImage);
      cityCard.appendChild(cityName);
      cityCard.appendChild(cityInfo);

      citiesContainer.appendChild(cityCard);
    });
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });