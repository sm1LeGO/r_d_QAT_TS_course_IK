function fetchData(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Final processed data:", data);
        })
        .catch(error => {
            console.warn("Handled error gracefully:", error);
        });
}
const apiUrl = 'https://api.thecatapi.com/v1/images/search/error';
fetchData(apiUrl);
