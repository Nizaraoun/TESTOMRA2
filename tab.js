function classerPar(event, tabName) {
    // Simply toggle the active class for tabs
    var tablink = event.currentTarget;
    tablink.classList.toggle("active");
}

function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function selectOption(dropdownId, tabId, optionText) {
    // Close the dropdown
    document.getElementById(dropdownId).style.display = "none";
    
    // Update the tab text with the selected option
    var tab = document.getElementById(tabId);
    tab.textContent = optionText;
    
    // Set the tab to active
    tab.classList.add("active");
}
