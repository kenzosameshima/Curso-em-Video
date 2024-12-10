const hiddenButton = document.querySelector('#discount');
const content = document.querySelector('#content');

// Create a new paragraph element with the given text
function newParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    return paragraph;
}

// Display the results (original price and discounted price)
function displayResults(price, discountedPrice, product) {
    content.innerHTML = '';

    const heading = document.createElement('h2');
    heading.innerHTML = `Calculating the discounted price of your $${price} ${product}:`;
    content.appendChild(heading);

    content.appendChild(newParagraph(`$${discountedPrice}`));
}

// Event listener for when the hidden button is clicked
hiddenButton.addEventListener('click', function() {
    let product = prompt('What are you buying?');
    let price = prompt(`How much does this ${product} cost?`);
    price = parseFloat(price);

    if (isNaN(price)) {
        alert('Please enter a valid price.');
        return;
    }

    let discount = prompt('Enter the discount percentage:');
    discount = parseFloat(discount);

    if (isNaN(discount) || discount < 0 || discount > 100) {
        alert('Please enter a valid discount percentage between 0 and 100.');
        return;
    }

    // Calculate the discounted price
    const discountedPrice = price * ((100 - discount) / 100);

    // Display the results
    displayResults(price, discountedPrice, product);
});
