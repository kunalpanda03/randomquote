const express = require('express');
// const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Route to get a random inspirational quote
app.get('/get-quote', async (req, res) => {
    try {
        const response = await fetch('https://zenquotes.io/api/random');
        const data = await response.json();
        const quote = data[0].q; // Extracting the quote from the API response
        res.json({ quote: quote });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
