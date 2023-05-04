// 1
let i = 10;
while (i <= 20) {
  document.write(i + ", ");
  i++;
}

// 2
let i = 10;
while (i <= 20) {
  document.write(i * i + " ");
  i++;
}

// 3
let i = 1;
while (i <= 10) {
  document.write(7 * i + "<br>");
  i++;
}

// 4
let i = 1;
let sum = 0;
do {
  sum += i;
  i++;
} while (i <= 15);
document.write(sum);

// 5
let i = 15;
let product = 1;
while (i <= 35) {
  product *= i;
  i++;
}
document.write(product);

// 6
let i = 1;
let sum = 0;
while (i <= 500) {
  sum += i;
  i++;
}
let average = sum / 500;
document.write(average);

// 7
let i = 30;
let sum = 0;
while (i <= 80) {
  if (i % 2 === 0) {
    sum += i;
  }
  i++;
}
document.write(sum);

// 8
let i = 100;
while (i <= 200) {
  if (i % 3 === 0) {
    console.log(i);
  }
  i++;
}

// 9
let number = 42;
let i = 1;
do {
  if (number % i === 0) {
    console.log(i);
  }
  i++;
} while (i <= number);


// 10
let number = 42;
let i = 1;
let count = 0;
while (i <= number) {
  if (number % i === 0 && i % 2 === 0) {
    count++;
  }
  i++;
}
console.log(count);


// 11
let number = 42;
let i = 1;
let sum = 0;
do {
  if (number % i === 0 && i % 2 === 0) {
    sum += i;
  }
  i++;
} while (i <= number);
console.log(sum);


// 12
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
