function classerPar(event, tabName) {
    // Remove "active" class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove("active"));
    
    // Add "active" class to the selected tab
    event.currentTarget.classList.add("active");
}

function toggleDropdown(dropdownId) {
    // Close any open dropdown
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(dropdown => dropdown.style.display = "none");
    
    // Toggle the selected dropdown
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function selectOption(dropdownId, tabId, optionText) {
    // Close the dropdown
    document.getElementById(dropdownId).style.display = "none";
    
    // Remove "active" class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove("active"));

    // Update the tab text with the selected option
    const tab = document.getElementById(tabId);
    tab.textContent = optionText;
    
    // Set the tab to active
    tab.classList.add("active");
}
