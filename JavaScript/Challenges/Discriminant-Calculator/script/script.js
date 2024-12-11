// Select the button and the content div from the HTML document
const calculateButton = document.querySelector('#calculate');
const content = document.querySelector('#content');

// Function to create and display new paragraphs
function newParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    return paragraph;
}

function displayResults(result, a, b, c) {
    const heading = document.createElement('h2');
    heading.innerHTML = 'Calculating Discriminant';
    content.appendChild(heading);
    
    // Show the formatted equation
    content.appendChild(newParagraph(`<strong>${a}x² + ${b}x + ${c} = 0</strong>`));
    
    // Show the discriminant formula with values
    content.appendChild(newParagraph(`<strong>Δ = (${b})² - 4 * (${a}) * (${c})</strong>`));

    // Show the final discriminant result
    content.appendChild(newParagraph(`<strong>Δ = ${result}</strong>`));
}


function calculateDiscriminant(a, b, c) {
    const delta = (b ** 2) - (4 * a * c);
    return delta;
}

calculateButton.addEventListener('click', function() {
    let a = parseFloat(prompt('What is the value of a?'));
    let b = parseFloat(prompt('What is the value of b?'));
    let c = parseFloat(prompt('What is the value of c?'));
    
    // Calculate the discriminant
    const results = calculateDiscriminant(a, b, c);
    
    // Clear previous content and display new results with steps
    content.innerHTML = '';
    displayResults(results, a, b, c);
});