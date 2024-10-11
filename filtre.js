// Data for each filter section
const filterData = {
    distanceFilters: {
        items: [
            { id: 'less-100', label: 'moins de 100m', count: 15 },
            { id: 'between-200-300', label: 'entre 200 et 300', count: 7 },
            { id: 'between-300-400', label: 'entre 300 et 400', count: 4 }
        ],
        showAllCount: 15
    },
    quartierFilters: {
        items: [
            { id: 'masjid-al-haram', label: 'Masjid al Haram', count: 200 },
            { id: 'abraj-al-bait', label: 'Abraj al bait', count: 100 },
            { id: 'abraj-al-safwa', label: 'Abraj al Safwa', count: 50 },
            { id: 'makkah', label: 'Makkah', count: 30 },
            { id: 'other', label: 'Autre', count: 20 }
        ],
        showAllCount: 10
    },
    viewFilters: {
        items: [
            { id: 'with-navette', label: 'avec navette', count: 45 },
            { id: 'without-view', label: 'sans navette', count: 25 }
        ],
        showAllCount: 8
    },
    Mosquees: {
        items: [
            { id: '100-m', label: '100 m', count: 45 },
            { id: '200-m', label: '200 m', count: 65 },
            { id: '300-m', label: '300 m', count: 33 }

        ],
        showAllCount: 15
    },
     Marques : {  items: [
        
            { id: "gest-ready", label: "Gest Ready", count: 200 },
            { id: "tres-mercure", label: "Très mercure", count: 210 },
            { id: "ibis-1", label: "ibis", count: 89 },
            { id: "appart-city", label: "Appart City", count: 75 },
            { id: "sejours-et-affaires", label: "Séjours et affaires", count: 45 },
            { id: "clevacances", label: "Clévacances", count: 65 },
            { id: "campanile", label: "Campanile", count: 200 },
            { id: "best-western", label: "Best Western", count: 210 },
            { id: "ibis-2", label: "ibis", count: 89 }
        
        
      ],
      showAllCount: 35

    },
};

// Function to populate filters
function populateFilters(filterId, filterData) {
    const container = document.getElementById(filterId);

    // Populate filter checkboxes
    filterData.items.forEach(item => {
        // Create checkbox container
        const checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('checkbox-container');

        // Create checkbox input
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = item.id;
        checkbox.classList.add('rating-checkbox'); // Add the rating-checkbox class here

        // Create label for the checkbox
        const label = document.createElement('label');
        label.setAttribute('for', item.id);
        label.textContent = item.label;

        // Create span for count
        const countSpan = document.createElement('span');
        countSpan.textContent = ` (${item.count})`;

        // Append checkbox, label, and count span to the container
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(label);
        checkboxContainer.appendChild(countSpan);

        // Append the container to the filter container
        container.appendChild(checkboxContainer);
    });

    // Update "tous afficher" value
    const showAllElement = container.parentElement.querySelector('.order-last');
    showAllElement.textContent = `tous afficher(${filterData.showAllCount})`;
}

// Populate all filters
populateFilters('distance-filters', filterData.distanceFilters);
populateFilters('quartier-filters', filterData.quartierFilters);
populateFilters('view-filters', filterData.viewFilters);
populateFilters('view-Mosquees', filterData.Mosquees);
populateFilters('view-Marques', filterData.Marques);


