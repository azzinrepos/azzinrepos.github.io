const images = [];
let index = 0;

while (index < 5) {
  index += 1;
  images.push(`${index}.jpg`);
}

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.setAttribute('background', `img/${chosenImage}`);