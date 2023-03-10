
  // Get all the dropdown elements
  var dropdowns = document.getElementsByClassName("dropdown");

  // Loop through all the dropdown elements
  for (var i = 0; i < dropdowns.length; i++) {
    var dropdown = dropdowns[i];

    // Add an event listener to each dropdown to toggle the dropdown-content visibility on click
    dropdown.addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

