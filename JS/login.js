document.addEventListener("DOMContentLoaded", ()=>{
  const login = document.querySelector(".btn-entrar");
  
  login.addEventListener("click", () => {
    window.location.href = "home.html";
  });

  const themeSelect = document.querySelector(".themes")

  themeSelect.addEventListener("change", (e)=>{
    const theme = e.target.value;

    if(theme === "light"){
      document.body.style.backgroundColor = "#FFF"
    }else{
      document.body.style.backgroundColor = "#0F1216"
    }
  })

})



