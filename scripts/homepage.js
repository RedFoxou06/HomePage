const suggestions = [
    "🎯 Lancer une ranked sur Valorant",
    "🧠 Travailler 30 min sur un projet perso",
    "📚 Lire un livre",
    "💪 Faire un peu de sport ou s'étirer",
    "🎮 Jouer à Wolfenstein The New Order",
    "✍️ Continuer mon application Valorant",
    "🧘‍♂️ Prendre 5 minutes pour respirer",
    "🤓 Faire une application to-do-list",
    "💻 Coder une application",
    "🐈‍⬛ Jouer avec Anne-coco"
];

function chargerSuggestions() {
    const container = document.getElementById("task-container");
    container.innerHTML = "";
    const shuffled = suggestions.sort(() => 0.5 - Math.random()).slice(0, 3);
    shuffled.forEach(task => {
        const div = document.createElement("div");
        div.className = "task-box";
        div.textContent = task;
        container.appendChild(div);
    });
}

document.getElementById("reload-btn").addEventListener("click", chargerSuggestions);
window.addEventListener("DOMContentLoaded", chargerSuggestions);

document.getElementById("open-spotify-btn").addEventListener("click", () => {
    window.location.href = "spotify:";
});
