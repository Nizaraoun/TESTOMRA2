function getFrenchDateString(date) {
    const options = { day: 'numeric', month: 'short' }; // Format day and short month
    return date.toLocaleDateString('fr-FR', options);
}

function fillDateRange() {
    const startDate = new Date(); // Current date
    const endDate = new Date(); // Copy of the current date for range calculation
    endDate.setDate(startDate.getDate() + 11); // Add 11 days for the range

    // Format the date range in French
    const dateRange = `${getFrenchDateString(startDate)} - ${getFrenchDateString(endDate)}`;
    
    // Update the paragraph content
    document.getElementById("resultats").innerHTML = `129 résultats trouvés pour ${dateRange}.`;
}

// Call the function to fill the date range
fillDateRange();
