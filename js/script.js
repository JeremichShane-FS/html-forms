// Shane Jeremich
// November 12th, 2023
// Code Exercise 06: HTML Forms

// * Problem #1 – Fill'er Up
// Get references to the input fields and the submit button and store them in variables.
let gallons = document.getElementById("gallons"),
  quarts = document.getElementById("quarts"),
  pints = document.getElementById("pints"),
  cups = document.getElementById("cups"),
  gallonSubmit = document.getElementById("gallon-submit"),
  movieSubmit = document.getElementById("movie-submit"),
  quartsResult = document.getElementById("quarts-result"),
  pintsResult = document.getElementById("pints-result"),
  cupsResult = document.getElementById("cups-result");

// Conversion Factors:
// 1 Gallon =
// Quart	4 Quarts
// Pint	8 Pints
// Cups	16 Cups

// Add an event listener to the submit button that will prevent the default action from occurring when the button is clicked.
// In the event listener, check to see if the gallons input field is valid.  If it is, then check to see which radio button is checked.  If the quarts radio button is checked, then convert the gallons to quarts and display the result in the quarts result input field.  If the pints radio button is checked, then convert the gallons to pints and display the result in the pints result input field.  If the cups radio button is checked, then convert the gallons to cups and display the result in the cups result input field.

gallonSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  let validGallons = gallons.reportValidity();

  if (validGallons) {
    console.log(gallons.value);
    if (quarts.checked) {
      quartsResult.value = gallons.value * 4;
      pintsResult.value = "";
      cupsResult.value = "";
    } else if (pints.checked) {
      pintsResult.value = gallons.value * 8;
      quartsResult.value = "";
      cupsResult.value = "";
    } else if (cups.checked) {
      cupsResult.value = gallons.value * 16;
      quartsResult.value = "";
      pintsResult.value = "";
    }
  }
});

// * Problem #2 – Movie Star

// In this program, we will the total number of movies the user has in multiple formats and determine what ranking they are in a movie club.

// Create an h1 tag with the problem's name. Create additional tags that explain the problem.

// Create a form for this problem.

// The form should have:

// Input for the number of DVDs. Make sure this can accept only positive whole numbers.
// Input for the number of Blu-Rays. Make sure this can accept only positive whole numbers.
// Input for the number of UltraViolets. Make sure this can accept only positive whole numbers.
// A button that starts the process.
// An empty H1 tag that will hold the final results: Total Number Of Movies Owned
// 1 and only 1 Image that will change based on the number of movies the user owns
// Remember to set the size of the image
// You will need to have validation for the number inputs. Make sure they can not be left blank and they should only be able to accept positive values.

// User Inputs:

// Amount Of DVDs
// Amount of Blue-Rays
// Amount of UltraViolets
// Result To Print Out In H1 Tag:

// If the user has under 50 movies.
// “Your collection contains only X movies, which makes you a bronze star member.”
// Where X is the total number of all movies combined.
// If the user has between exactly 50 up to but not including 100 movies.
// “Your collection contains X movies, which makes you a silver star member.”
// Where X is the total number of all movies combined.
// If the user has exactly 100 movies or more.
// “Wow! Your collection contains X movies, which makes you a gold star member.”
// Where X is the total number of all movies combined.

movieSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  let dvd = document.getElementById("dvd"),
    bluray = document.getElementById("blu-ray"),
    ultraviolet = document.getElementById("ultraviolet"),
    movieTotal = document.getElementById("movie-total"),
    imgBG = document.getElementById("image-background");

  let validDvd = dvd.reportValidity(),
    validBluRay = bluray.reportValidity(),
    validUltraViolet = ultraviolet.reportValidity();

  if (validDvd && validBluRay && validUltraViolet) {
    let totalMovies = parseInt(dvd.value) + parseInt(bluray.value) + parseInt(ultraviolet.value);

    movieTotal.innerHTML = `<p>Your collection contains ${totalMovies} movies, which makes you a</p> `;
    if (totalMovies < 50) {
      movieTotal.innerHTML += "<p>bronze star member.</p>";
      imgBG.style.backgroundImage = "url('img/bronzeStar.jpg')";
    } else if (totalMovies >= 50 && totalMovies < 100) {
      movieTotal.innerHTML += "<p>silver star member.</p>";
      imgBG.style.backgroundImage = "url('img/silverStar.jpg')";
    } else if (totalMovies >= 100) {
      movieTotal.innerHTML += "<p>gold star member.</p>";
      imgBG.style.backgroundImage = "url('img/goldStar.jpg')";
    }
  }
});
