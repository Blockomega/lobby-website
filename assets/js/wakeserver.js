function wakeServer() {
    fetch("https://kleinstueck.org/wol") // URL zu deinem Raspberry Pi
        .then(response => {
            if (response.ok) {
                alert("Wake-on-LAN Befehl gesendet!");
            } else {
                alert("Fehler beim Aufwecken.");
            }
        })
        .catch(error => {
            console.error("Fehler:", error);
            alert("Server nicht erreichbar.");
        });
}