// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})


  // Dark mode toggle function
const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Change button text based on mode
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Light Mode';
    toggleButton.classList.remove('btn-light');
    toggleButton.classList.add('btn-dark');
  } else {
    toggleButton.textContent = 'Dark Mode';
    toggleButton.classList.remove('btn-dark');
    toggleButton.classList.add('btn-light');
  }
});


document.querySelectorAll('.portfolio-nav button').forEach(button => {
  button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      const items = document.querySelectorAll('.portfolio-content .project-item');

      items.forEach(item => {
          if (category === "all" || item.getAttribute('data-category') === category) {
              item.style.display = "block"; // Show the item
          } else {
              item.style.display = "none"; // Hide the item
          }
      });
  });
});
// Get all navigation buttons and portfolio items
const buttons = document.querySelectorAll('.portfolio-nav button');
const items = document.querySelectorAll('.portfolio-content .project-item');

// Default active category on page load
const defaultCategory = 'mobile-app';
setActiveCategory(defaultCategory);

// Add click event listeners to navigation buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        setActiveCategory(category);
    });
});

// Function to set the active category
function setActiveCategory(category) {
    // Show/hide portfolio items
    items.forEach(item => {
        if (item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    // Update active button styling
    buttons.forEach(button => {
        if (button.getAttribute('data-category') === category) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}


