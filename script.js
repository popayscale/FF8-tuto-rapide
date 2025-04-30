document.addEventListener('DOMContentLoaded', function() {
    const mainMenu = document.getElementById('main-menu');
    const gforceMenu = document.getElementById('gforce-menu');
    const magicMenu = document.getElementById('magic-menu');
    const golgothaMenu = document.getElementById('golgotha-menu');
    const shivaMenu = document.getElementById('shiva-menu');
    const returnArea = document.getElementById('return-area');
    const gforceOptions = document.querySelectorAll('.gforce-option');
    const gforceStats = document.querySelector('.gforce-stats');
    const centralText = document.querySelector('.central-text');
    let currentMenu = 'main';
    let isElevated = false;

    function showTooltips(element) {
        element.addEventListener('mouseenter', function() {
            const tooltip = this.querySelector('.tooltip');
            if (tooltip) tooltip.style.display = 'block';
        });

        element.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.tooltip');
            if (tooltip) tooltip.style.display = 'none';
        });
    }

    document.querySelectorAll('.clickable-area').forEach(area => showTooltips(area));

    if (returnArea) {
        returnArea.addEventListener('click', function() {
            window.location.href = 'Accueil.html';
        });
    }
});
