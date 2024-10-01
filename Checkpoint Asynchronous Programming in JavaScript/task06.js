// Task 06: Awaiting Parallel Calls
async function parallelCalls(urls) {
    try {
        const requests = urls.map(url => fetch(url)); // Create an array of fetch promises
        const responses = await Promise.all(requests);
        
        const data = await Promise.all(responses.map(response => response.json())); // Wait for all responses
        console.log('All data:', data);
    } catch (error) {
        console.error('Error in parallel calls:', error);
    }
}

// Example usage
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2'
];
parallelCalls(urls);