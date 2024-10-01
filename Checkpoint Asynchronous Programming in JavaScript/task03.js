// Task 03: Handling Errors with Async/Await
async function awaitCall() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/invalid'); // Simulating a failing API call
        if (!response.ok) throw new Error('Network response was not ok'); // Handle non-200 responses
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message); // User-friendly error message
    }
}

// Example usage
awaitCall();