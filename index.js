document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const logo = document.querySelector('.logo-img');
    const col = document.querySelector('.main-content');

    if (!logo) {
        console.error("Logo non trovato! Controlla la classe .logo-img nel tuo HTML."); 
        return;
    }

    setTimeout(() => {
        // 1. Applichiamo il bianco e rimuoviamo ogni transizione precedente
        body.style.transition = 'none';
        body.style.backgroundColor = '#FFFFFF';

        // 2. Usiamo un doppio requestAnimationFrame per forzare il rendering del bianco
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // 3. Ora che il bianco è stato disegnato, riattiviamo la transizione verso il nero
                body.style.transition = 'background-color 1.5s ease-out';
                body.style.backgroundColor = '#080809';

                // 4. Facciamo apparire il logo poco dopo l'inizio della dissolvenza
                setTimeout(() => {
                    logo.style.opacity = '1';
                    logo.style.transform = 'scale(1)';

                    col.style.opacity = '1';
                    col.style.transform = 'scale(1)';
                }, 500);
            });
        });
    }, 1500);
});