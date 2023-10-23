function addUser() {
player1 = document.getElementById("player1_name").value;
player2 = document.getElementById("player2_name").value;

localStorage.setItem("p1", player1);
localStorage.setItem("p2", player2);

window.location.replace("game_page.html");
}