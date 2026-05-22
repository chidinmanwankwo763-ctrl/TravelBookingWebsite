function showTravelTip() {
    const tips = [
        'Hydrate often and keep a small reusable bottle handy during excursions.',
        'Capture sunsets—they offer the warmest hues for your travel memories.',
        'Sample local street food early in the trip to find favorites you can revisit.',
        'Keep digital copies of your documents stored securely in the cloud.',
        'Plan one free day to wander without an itinerary—you might find a hidden gem.'
    ];

    if (typeof toggleMessage === 'function') {
        toggleMessage('external-message', () => {
            const randomTip = tips[Math.floor(Math.random() * tips.length)];
            return `Travel Tip: ${randomTip}`;
        });
        return;
    }

    const messageEl = document.getElementById('external-message');
    if (messageEl) {
        const fallbackTip = tips[Math.floor(Math.random() * tips.length)];
        messageEl.textContent = `Travel Tip: ${fallbackTip}`;
    }
}

function showBudgetEstimate() {
    const basePrice = 9999;
    const insurance = 120;
    const guide = 250;
    const contingencyPercentage = 0.08;

    const total = basePrice + insurance + guide;
    const contingency = total * contingencyPercentage;
    const grandTotal = total + contingency;

    if (typeof toggleMessage === 'function') {
        toggleMessage('budget-message', () => {
            return `Estimated Budget: $${grandTotal.toFixed(2)} (including contingency).`;
        });
        return;
    }

    const budgetEl = document.getElementById('budget-message');
    if (!budgetEl) {
        return;
    }

    budgetEl.textContent = `Estimated Budget: $${grandTotal.toFixed(2)} (including contingency).`;
}

