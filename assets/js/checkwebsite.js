const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.get("/check", async (req, res) => {
    const url = "https://www.google.com"; // Ersetze mit der zu prüfenden Seite

    try {
        const response = await axios.get(url);
        res.json({ status: "online" });
    } catch (error) {
        if (error.response && error.response.status >= 500) {
            res.json({ status: "cloudflare_error" });
        } else {
            res.json({ status: "offline" });
        }
    }
});

app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
