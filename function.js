function generieren (value){
    switch (value) {
        case "medt":
            document.getElementById("text").innerHTML = "<h3>Medientechnik</h3><br><p>Hier findest du alles über die Medientechnik-Abteilung</p>";
            break;
        case "lernbuero":
            document.getElementById("text").innerHTML = "<h3>Lernbüro</h3><br><p>Hier findest du alles über das Lernbüro</p>";
            break;
        case "syt":
            document.getElementById("text").innerHTML = "<h3>Systemtechnik</h3><br><p>Hier findest du alles über die Systemtechnik-Abteilung</p>";
            break;
    }
}
