//  Dark button

document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector("button");

    if (btn) {
        btn.addEventListener('mouseover', () => {
            btn.style.backgroundColor = 'red';
        });
    } else {
        console.error("Aucun bouton trouvé avec querySelector('button').");
    }

    let button = document.getElementById('dark-mode');

    if (button) {
        button.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    } else {
        console.error("Aucun bouton trouvé avec id='dark-mode'.");
    }
});