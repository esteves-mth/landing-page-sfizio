const botao = document.querySelector("#mudar-tema");

botao.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");

    const modoEscuroAtivo =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "tema",
        modoEscuroAtivo ? "escuro" : "claro"
    );
});

window.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
        document.body.classList.add("dark-mode");
        botao.checked = true;
    }
});