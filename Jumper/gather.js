function handleNameSubmit() {
    const name = document.getElementById('nameInput').value;
    const namePage = document.getElementById('namePage');
    const greeting = document.getElementById('greeting');
    const flowerPage = document.getElementById('flowerPage');
    
    if (name.trim() === '') {
      alert('Please enter your name!');
      return;
    }
  
    greeting.textContent = `Hello ${name}! What type of flower do you want?`;
    namePage.style.display = 'none';
    flowerPage.style.display = 'block';
  }
  
  function selectFlower(flower) {
    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('message');
    const flowerImage = document.getElementById('Pi');
    const namePage = document.getElementById('namePage');
    const flowerPage = document.getElementById('flowerPage');
    const loadingMessage = document.getElementById('loadingMessage');

    if (flower === 'roses') {
      message.textContent = `${name}, this virtual roses is for you. I love you! 🌹`;
      document.getElementById('Pi').src = 'pixelRose.jpeg';
    } else if (flower === 'sunflower') {
      message.textContent = `${name}, this virtual sunflower is for you. I love you! 🌻`;
      document.getElementById('Pi').src = 'pixelSunflower.jpeg';
    }
  
    namePage.style.display = 'none';
    flowerPage.style.display = 'block';
    loadingMessage.style.display = 'block';
  

    // Simulate image creation/loading process
    setTimeout(() => {
        flowerImage.style.display = 'block'; // Display the image
        loadingMessage.style.display = 'none'; // Hide loading message
      }, 8000); // Simulate a 4-second delay for loading (adjust as needed)
    }
  
  