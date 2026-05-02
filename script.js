// Array containing different facts about Mars
const marsFacts = [
  "Mars has the largest volcano in the Solar System: Olympus Mons.",
  "Mars has two small moons called Phobos and Deimos.",
  "A day on Mars lasts about 24 hours and 37 minutes.",
  "Mars is often called the Red Planet because of iron-rich dust on its surface.",
  "Scientists have found evidence that water once flowed on Mars."
];

// Select the button and paragraph elements from the HTML
const factButton = document.querySelector("#fact-button");
const factText = document.querySelector("#fact-text");

// Add a click event to the button
factButton.addEventListener("click", function () {

  // Generate a random number based on the number of facts
  const randomIndex = Math.floor(Math.random() * marsFacts.length);

  // Update the paragraph text with a random fact
  factText.textContent = marsFacts[randomIndex];
});