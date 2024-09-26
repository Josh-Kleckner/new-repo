// Define an async function named fetchData
async function fetchData() {
  // Use the fetch method to send a GET request to the specified URL and wait for the response
    const response = await fetch('https://cnt-74c5b053-1f04-496f-96de-4548d22b3785.containerhub.tripleten-services.com');
    // Use the json method on the response object to extract the data from the response body and wait for it to be parsed
    const data = await response.json();    
    console.log(data);
}

// Call the fetchData function to execute it
fetchData();
