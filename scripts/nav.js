document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('[data-collapse-toggle]');
    const menu = document.getElementById('navbar-dropdown');
  
    toggleButton.addEventListener('click', function() {
      menu.classList.toggle('hidden');
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('[data-dropdown-toggle]');
    const dropdownMenu = document.getElementById('dropdownNavbar');

    dropdownButton.addEventListener('click', function(){
        dropdownMenu.classList.toggle('hidden');
    });


    });


