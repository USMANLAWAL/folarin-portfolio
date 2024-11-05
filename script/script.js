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


  const toggleButton = document.getElementById('toggle-button');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Change button text based on mode
    if (body.classList.contains('dark-mode')) {
      toggleButton.textContent = 'Toggle Light Mode';
      toggleButton.classList.remove('btn-light');
      toggleButton.classList.add('btn-dark');
    } else {
      toggleButton.textContent = 'Toggle Dark Mode';
      toggleButton.classList.remove('btn-dark');
      toggleButton.classList.add('btn-light');
    }
  });
