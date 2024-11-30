// Get references to elements
const cards = document.querySelectorAll('.card');
const detailSection = document.getElementById('detail-section');
const backBtn = document.getElementById('back-btn');
const detailTitle = document.getElementById('detail-title');
const detailDescription = document.getElementById('detail-description');
const detailPrice = document.getElementById('detail-price');
const detailImage = document.getElementById('detail-image');
const cardGrid = document.querySelector('.grid');

// Add click event listeners to each card
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Get data attributes from clicked card
    const title = card.dataset.title;
    const description = card.dataset.description;
    const price = card.dataset.price;
    const image = card.dataset.image;

    // Set the detail section content
    detailTitle.textContent = title;
    detailDescription.textContent = description;
    detailPrice.textContent = price;
    detailImage.src = image;

    // Show the detail section and hide the grid
    detailSection.classList.remove('hidden');
    cardGrid.classList.add('hidden');
  });
});

// Add click event listener to the back button
backBtn.addEventListener('click', () => {
  // Hide the detail section and show the grid
  detailSection.classList.add('hidden');
  cardGrid.classList.remove('hidden');
});
