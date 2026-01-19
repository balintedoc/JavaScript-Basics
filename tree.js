const height = 10;

for (let i = 1; i <= height; i++) {
    const spaces = ' '.repeat(height - i);
    const stars = '*'.repeat(i * 2 - 1);
    console.log(spaces + stars);
}

const trunkSpaces = ' '.repeat(height - 1);
console.log(trunkSpaces + '|');
console.log(trunkSpaces + '|');