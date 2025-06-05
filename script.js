const GITHUB_USERNAME = "Brenda-A-S";

async function carregarPerfilGithub() {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!response.ok) throw new Error("Usuário não encontrado");

        const data = await response.json();

        document.getElementById("avatar").src = data.avatar_url;
        document.getElementById("name").textContent = data.name || "Sem nome";
        document.getElementById("username").textContent = "@" + data.login;
        document.getElementById("repos").textContent = data.public_repos;
        document.getElementById("followers").textContent = data.followers;
        document.getElementById("following").textContent = data.following;
        document.getElementById("profile-link").href = data.html_url;

    } catch (error) {
        console.error("Erro ao buscar dados do GitHub:", error);
    }
}

carregarPerfilGithub();