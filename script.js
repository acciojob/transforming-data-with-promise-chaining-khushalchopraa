document.getElementById('btn').addEventListener('click', function() {
    // Get the input value and convert it to a number
    const inputValue = Number(document.getElementById('ip').value);
    const outputDiv = document.getElementById('output');

    // Create a function that returns a promise resolving after a delay
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Step 1: Create the initial promise that resolves after 2 seconds with the input number
    delay(2000)
        .then(() => {
            outputDiv.textContent = `Result: ${inputValue}`;
            return inputValue; // Pass the input number to the next promise
        })

        // Step 2: Multiply the number by 2 after 1 second
        .then(number => {
            return delay(1000).then(() => {
                const result = number * 2;
                outputDiv.textContent = `Result: ${result}`;
                return result;
            });
        })

        // Step 3: Subtract 3 from the number after 1 second
        .then(number => {
            return delay(1000).then(() => {
                const result = number - 3;
                outputDiv.textContent = `Result: ${result}`;
                return result;
            });
        })

        // Step 4: Divide the number by 2 after 1 second
        .then(number => {
            return delay(1000).then(() => {
                const result = number / 2;
                outputDiv.textContent = `Result: ${result}`;
                return result;
            });
        })

        // Step 5: Add 10 to the number after 1 second
        .then(number => {
            return delay(1000).then(() => {
                const result = number + 10;
                outputDiv.textContent = `Result: ${result}`;
                return result;
            });
        })

        // Step 6: Update the text content of the output div with the final result
        .then(finalResult => {
            outputDiv.textContent = `Final Result: ${finalResult}`;
        })

        // Handle any errors that occur in the promise chain
        .catch(error => {
            outputDiv.textContent = `Error: ${error}`;
        });
});