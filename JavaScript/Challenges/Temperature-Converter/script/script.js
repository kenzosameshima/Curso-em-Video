// Get DOM elements
const hideButton = document.querySelector('#convert');
const content = document.querySelector('#content');

// Function to create and return a new paragraph element
function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    return paragraph;
}

// Function to format numbers
function formatNumber(number) {
    return number % 1 == 0 ? number.toFixed(0) : number.toFixed(2);
}

// Function to convert Celsius to other temperature units
function convertTemperature(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;
    const rankine = (celsius * 9 / 5) + 491.67;
    const reaumur = (celsius * 4 / 5);

    return {
        fahrenheit: formatNumber(fahrenheit),
        kelvin: formatNumber(kelvin),
        rankine: formatNumber(rankine),
        reaumur: formatNumber(reaumur)
    };
}

// Function to display conversion results
function displayResults(celsius, conversions) {
    const { fahrenheit, kelvin, rankine, reaumur } = conversions;
    
    // Clear previous content
    content.innerHTML = '';

    // Create heading and append it
    const heading = document.createElement('h2');
    heading.innerHTML = `The temperature ${celsius} degrees Celsius corresponds to:`;
    content.appendChild(heading);

    // Append conversion results
    content.appendChild(createParagraph(`${fahrenheit} degrees Fahrenheit (°F)`));
    content.appendChild(createParagraph(`${kelvin} degrees Kelvin (K)`));
    content.appendChild(createParagraph(`${rankine} degrees Rankine (°Ra)`));
    content.appendChild(createParagraph(`${reaumur} degrees Réaumur (°Ré)`));
}

// Event listener for button click
hideButton.addEventListener('click', function() {
    // Get input and convert it to a number
    let celsius = prompt('Enter a temperature in Celsius (°C)');
    celsius = parseFloat(celsius);

    // Validate input
    if (isNaN(celsius)) {
        alert('Please enter a valid number.');
        return;
    }

    // Perform temperature conversions
    const conversions = convertTemperature(celsius);

    // Display the conversion results
    displayResults(celsius, conversions);
});
