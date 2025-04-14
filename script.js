document.addEventListener('DOMContentLoaded', function() {
    // Get buttons from the main page
    const coalBtn = document.getElementById('coalBtn');
    const naturalGasBtn = document.getElementById('naturalGasBtn');
    const elecBtn = document.getElementById('elecBtn');
    const ch4Btn = document.getElementById('ch4Btn');
    const n2oBtn = document.getElementById('n2oBtn');

    // Add event listeners if buttons exist (only on main page)
    if (coalBtn) {
        coalBtn.addEventListener('click', function() {
            window.location.href = 'global.html';
        });
    }
    if (naturalGasBtn) {
        naturalGasBtn.addEventListener('click', function() {
            window.location.href = 'india.html';
        });
    }

    if (elecBtn) {
        elecBtn.addEventListener('click', function() {
            window.location.href = 'elec.html';
        });
    }

    if (ch4Btn) {
        ch4Btn.addEventListener('click', function() {
            window.location.href = 'ch4.html';
        });
    }

    if (n2oBtn) {
        n2oBtn.addEventListener('click', function() {
            window.location.href = 'n2o.html';
        });
    }
});
