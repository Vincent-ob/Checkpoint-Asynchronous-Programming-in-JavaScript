// Task 04: Chaining Async/Await
async function asyncFunction1() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Function 1 complete');
}

async function asyncFunction2() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Function 2 complete');
}

async function asyncFunction3() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Function 3 complete');
}

async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
}

// Example usage
chainedAsyncFunctions();