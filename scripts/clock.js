function updateClock() {
    const now = new Date();

    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${h}:${m}`;

    const days   = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];

    const day = days[now.getDay()];
    const d   = now.getDate();
    const mon = months[now.getMonth()];
    const yr  = now.getFullYear();

    document.getElementById('clock-date').textContent = `${day} ${d} ${mon} ${yr}`;
    document.getElementById('date-sub').textContent   = `// ${day.toLowerCase()}, ${d} ${mon.toLowerCase()} ${yr}`;
}

updateClock();
setInterval(updateClock, 1000);
