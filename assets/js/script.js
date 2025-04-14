async function checkWebsiteStatus(element, url) {
    try {
        const response = await fetch(url, { mode: 'no-cors' });
        document.getElementById(element).src = "../assets/images/online.png";
        document.getElementById(element).alt = "online";
        document.getElementById(element).classList.add("online");
    } catch (error) {
        document.getElementById(element).src = "../assets/images/offline.png";
        document.getElementById(element).alt = "offline";
        document.getElementById(element).classList.add("offline");
    }
}

checkWebsiteStatus("status-proxy", "https://example.com");
checkWebsiteStatus("status-nextcloud", "https://example.com");
checkWebsiteStatus("status-media", "https://example.com");
checkWebsiteStatus("status-mail", "https://example.com");