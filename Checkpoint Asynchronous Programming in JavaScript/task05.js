// Task 05: Awaiting Concurrent Requests
async function concurrentRequests() {
    try {
        const request1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
        const request2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
        
        const [response1, response2] = await Promise.all([request1, request2]);
        
        const data1 = await response1.json();
        const data2 = await response2.json();
        
        console.log('Data from request 1:', data1);
        console.log('Data from request 2:', data2);
    } catch (error) {
        console.error('Error with concurrent requests:', error);
    }
}

// Example usage
concurrentRequests();