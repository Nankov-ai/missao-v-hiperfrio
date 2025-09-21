document.addEventListener('DOMContentLoaded', () => {
    const consentOverlay = document.getElementById('consent-overlay');
    const appContent = document.getElementById('app-content');
    const acceptButton = document.getElementById('accept-button');
    const consentGiven = localStorage.getItem('ai-consent-given');
    
    if (consentGiven === 'true') {
        consentOverlay.style.display = 'none';
        appContent.style.display = 'block';
    }

    acceptButton.addEventListener('click', () => {
        localStorage.setItem('ai-consent-given', 'true');
        consentOverlay.style.display = 'none';
        appContent.style.display = 'block';
    });
});

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const btnId = dropdownId.replace('dropdown', 'btn');
    const btn = document.getElementById(btnId);
    
    dropdown.classList.toggle('show');
    btn.classList.toggle('active');
    
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    const allBtns = document.querySelectorAll('.dropdown-btn');
    
    allDropdowns.forEach((d) => {
        if (d.id !== dropdownId && d.classList.contains('show')) {
            d.classList.remove('show');
        }
    });
    
    allBtns.forEach((b) => {
        if (b.id !== btnId && b.classList.contains('active')) {
            b.classList.remove('active');
        }
    });
}