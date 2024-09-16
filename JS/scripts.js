const navbar = document.querySelector(".home-links"); // Se estiver usando uma classe
// const navbar = document.querySelector("#home-links"); // Se estiver usando um ID

// Define o tamanho original
const originalWidth = "100px"; // Tamanho original
const hoverWidth = "250px"; // Tamanho quando o mouse está sobre o elemento

// Define o tamanho original ao carregar
navbar.style.width = originalWidth;

// Adiciona o evento mouseover
navbar.addEventListener("mouseover", () => {
    navbar.style.width = hoverWidth;
    navbar.classList.add("expanded")
});

// Adiciona o evento mouseout
navbar.addEventListener("mouseout", () => {
    navbar.style.width = originalWidth;
    navbar.classList.remove("expanded")
});



