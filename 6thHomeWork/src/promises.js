function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network error! Status: ${response.status}`);
            }
            return response.json();
        });
}
function processData(data) {
    console.log("Received Data:", data);
    return data;
}

const apiUrl = 'https://api.thecatapi.com/v1/images/search';
fetchData(apiUrl)
    .then(processData)
    .catch(error => console.error("Error fetching data from server:", error));
