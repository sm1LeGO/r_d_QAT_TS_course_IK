async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Data received:", data);
    } catch (error) {
        console.warn("First request failed, trying to receive backup... " + error.message);
        try {
            const backupResponse = await fetch("https://api.spacexdata.com/v4/launches/latest");
            /* use this request to trigger an error for both calls (remove // from 14th line and comment 12th line) */
            // const backupResponse = await fetch("https://api.spacexdata.com/failed");
            if (!backupResponse.ok) {
                throw new Error(`Backup Error: ${backupResponse.status} - ${backupResponse.statusText}`);
            }
            const backupData = await backupResponse.json();
            console.log("Backup data received:", backupData);
        } catch (backupError) {
            console.error("Both requests failed. Generating custom error: " + backupError.message);
            throw new Error("Service is unavailable. Please try again later.");
        }
    }
}

(async () => {
    await fetchData("https://failed-service.com");
})();

