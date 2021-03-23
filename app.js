function draw(max, alreadyExtractedNumbers, iterations) {
    const extractedNumbers = []

    for (let i = 0; i < iterations; i++) {
        let valid = false;
        while (!valid) {
            const randomNumber = Math.floor(Math.random() * max) + 1;
            if (!alreadyExtractedNumbers.includes(randomNumber) && !extractedNumbers.includes(randomNumber)) {
                extractedNumbers.push(randomNumber);
                valid = true;
            }
        }
    }
    return extractedNumbers;
}

document.getElementById('draw').addEventListener('click', () => {
    const max = parseInt(document.getElementById('max').value);
    const extractedNumbers = document.getElementById('already_extracted').value.split(',').map(el => parseInt(el))
    const iterations = parseInt(document.getElementById('iterations').value)
    const result = draw(max, extractedNumbers, iterations);
    console.log(result)
    document.getElementById('output').innerHTML = `${result}`;
})