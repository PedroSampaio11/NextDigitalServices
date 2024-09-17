document.addEventListener("DOMContentLoaded", () => {
  const login = document.querySelector(".btn-entrar");

  login.addEventListener("click", () => {
    window.location.href = "home.html";
  });

  const themeSelect = document.querySelector(".themes");

  themeSelect.addEventListener("change", (e) => {
    const selected = e.target.value;

    if(selected === "dark"){
      document.body.style.backgroundColor = "#0F1216"
    }else if(selected === "light"){
      document.body.style.backgroundColor = "#F7F7F7"
    }else{
      return selected;
    }
  });
});
