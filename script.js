// Skrypt JavaScript dla strony

// Dodaj obsługę scrolla do nawigacji
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});
