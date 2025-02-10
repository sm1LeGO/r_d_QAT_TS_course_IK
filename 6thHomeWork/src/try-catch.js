async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Data received:", data);
    } catch (error) {
        console.warn("First request failed, trying to receive backup...");
        try {
            const backupResponse = await fetch("https://api.thecatapi.com/v1/images/search");
            /* use this request to trigger an error for both calls (remove // from 14th line and comment 12th line) */
            // const backupResponse = await fetch("https://fakestoreapi.com/carts/unaviable");
            if (!backupResponse.ok) {
                throw new Error(`Backup Error: ${backupResponse.status} - ${backupResponse.statusText}`);
            }
            const backupData = await backupResponse.json();
            console.log("Backup data received:", backupData);
        } catch (backupError) {
            console.error("Both requests failed. Generating custom error.");
            throw new Error("Service is unavailable. Please try again later.");
        }
    }
}

fetchData("https://failed-service.com");
