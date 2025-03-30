let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showItem(index) {
  // Hide all items
  items.forEach(item => item.style.display = 'none');
  // Show the current item
  items[index].style.display = 'block';
}

function moveSlide(step) {
  // Calculate the new index
  currentIndex = (currentIndex + step + totalItems) % totalItems;
  showItem(currentIndex);
}

// Initialize the carousel by showing the first item
showItem(currentIndex);
