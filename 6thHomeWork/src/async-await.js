async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching data from server:", error);
    }
}

function processData(data) {
    console.log("Received Data:", data);
    return data;
}

const apiUrl = 'https://api.thecatapi.com/v1/images/search';

(async () => {
    const data = await fetchData(apiUrl);
    if (data) {
        processData(data);
    }
})();
