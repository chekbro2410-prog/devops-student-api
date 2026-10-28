const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        status: "Success",
        message: "Welcome to Student DevOps Portal API",
        timestamp: new Date()
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({ service: "Online", uptime: process.uptime() });
});

app.listen(PORT, () => {
    console.log(`Dost App running on port ${PORT}`);
});