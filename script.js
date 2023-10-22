document.addEventListener('DOMContentLoaded', () => {
    const getQuoteButton = document.getElementById('getQuoteButton');
    const quoteContainer = document.getElementById('quoteContainer');

    getQuoteButton.addEventListener('click', async () => {
        try {
            const response = await fetch('/get-quote');
            const data = await response.json();
            const quote = data.quote;
            quoteContainer.textContent = `"${quote}"`;
        } catch (error) {
            quoteContainer.textContent = 'Failed to fetch quote. Please try again later.';
        }
    });
});
