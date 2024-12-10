const hiddenButton = document.querySelector('#discount');
const content = document.querySelector('#content');

const discount = 10;

function newParagraph (text) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    return paragraph;
}

function applyDiscount(price) {
    return price * (100 - discount) / 100;
}

function displayResults(product, price, discountedPrice) {
    content.innerHTML = '';
    const heading = document.createElement('h2');
    heading.textContent = `Calculating 10% discount for ${product}`;
    content.appendChild(heading);
    
    content.appendChild(newParagraph(`The original price was $${price.toFixed(2)}`));
    content.appendChild(newParagraph(`You've gained a $${(price/10).toFixed(2)} discount`))
    content.appendChild(newParagraph(`In the end, you'll pay  $${discountedPrice.toFixed(2)}`))
}

hiddenButton.addEventListener('click', function() {
    let product = prompt('What are you buying?');
    let price = prompt(`How much does this ${product} cost?`);
    price = parseFloat(price);
    let discountedPrice = applyDiscount(price);
    displayResults(product, price, discountedPrice);
});