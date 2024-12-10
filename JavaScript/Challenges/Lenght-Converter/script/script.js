// get elements
const hideButton = document.querySelector('#convert');
const content = document.querySelector('#content');

hideButton.addEventListener('click', function() {
    // Clear previous content and prepare the new content
    content.innerHTML = '';

    // Prompt the user to input a distance in meters
    let meters = prompt('Enter a distance in meters (m)');
    
    // Check if the input is a valid number
    meters = parseFloat(meters);
    if (isNaN(meters)) {
        alert('Please enter a valid number.');
        return;
    }
    
    // Perform conversions
    let km = meters / 1000;
    let hm = meters / 100;
    let dam = meters / 10;
    let dm = meters * 10;
    let cm = meters * 100;
    let mm = meters * 1000;

    // Create and append a heading
    const newHeading = document.createElement('h2');
    newHeading.innerHTML = `The distance ${meters} meters corresponds to:`;
    content.appendChild(newHeading);

    // Create a function to generate and return a new paragraph
    function createParagraph(text) {
        const newParagraph = document.createElement('p');
        newParagraph.innerHTML = text;
        return newParagraph;
    }

    // Append the converted values as paragraphs
    content.appendChild(createParagraph(`${km} kilometers (km)`));
    content.appendChild(createParagraph(`${hm} hectometers (hm)`));
    content.appendChild(createParagraph(`${dam} dekameters (dam)`));
    content.appendChild(createParagraph(`${dm} decimeters (dm)`));
    content.appendChild(createParagraph(`${cm} centimeters (cm)`));
    content.appendChild(createParagraph(`${mm} millimeters (mm)`));
});