document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 992) {
    document.querySelectorAll('.navbar .dropdown').forEach(function (dropdown) {
      dropdown.addEventListener('mouseenter', function () {
        const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
        bootstrap.Dropdown.getOrCreateInstance(toggle).show();
      });

      dropdown.addEventListener('mouseleave', function () {
        const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
        bootstrap.Dropdown.getOrCreateInstance(toggle).hide();
      });
    });
  }
});