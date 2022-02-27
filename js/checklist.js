// 1.
const product = {
  brand: 'Nokia',
  type: 'phone',
  price: 18500,
  isNew: false,
  colorVarient: ['black', 'silver', 'red', 'nevi blue'],
  similarProduct: {
    brand: 'Nokia', model: 1200,
    colorVarient: { dark: 'black', light: 'pink', medium: 'blue' },
    price: 1400
  },
  calculate() {
    return this.price + this.similarProduct.price;
  }
}

// 2.
const paragraph = `Hi, I am going to tell about my ${product.type}. Which brand is ${product.brand} and has a price of ${product.price}. It has color varients in ${product.colorVarient.join(' and ')}. I also use ${product.similarProduct.brand} ${product.similarProduct.model}. Which is most probably ${product.similarProduct.colorVarient.medium} color. This two phone cost me total of ${product.calculate()} taka.`;

// 3.
// a.
const return89 = () => 89;
// b.
const divideBy7 = num => parseFloat((num / 7).toFixed(3));
// c.
const addAndDevide = (num1, num2) => (num1 + num2) / 2;
// d.
const add = (num1, num2) => {
  const newNum1 = num1 + 7;
  const newNum2 = num2 + 7;
  return newNum1 + newNum2;
}

// 4,5.
const numbers = [12, 52, 66, 36, 93, 82, 48, 39, 72, 29];
// arrayName.map()
const newNumbers = numbers.map(num => parseFloat((num / 7).toFixed(2)));
// arrayName.forEach()
// newNumbers.forEach(num => console.log(Math.round(num)));
// arrayName.filter()
const greaterThan10 = newNumbers.filter(num => num > 10);
// arrayName.find()
const singleGreaterThan10 = newNumbers.find(num => num > 10);

// 6.
const { light, medium } = product.similarProduct.colorVarient;
const [, second] = product.colorVarient;

// 7,8,9
//  In 'photos.html' and 'photos.js'
// 10.
// In 'cocktail.html' and 'cocktail.js'



