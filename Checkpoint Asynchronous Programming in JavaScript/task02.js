// Task 02: Awaiting a Call
async function awaitCall() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Simulating an API call
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage
awaitCall();