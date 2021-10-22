let tabCadast = JSON.parse(localStorage.getItem("tabCadast"));
if (tabCadast === null) localStorage.setItem("tabCadast", JSON.stringify([]));

let cadastrar = () => {
    let tabCadast = JSON.parse(localStorage.getItem("tabCadast"));
    if (tabCadast === null) tabCadast = [];

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email !== "" && senha !== "" && email !== null && senha !== null) {
        if (senha.length >= 5) {
            let usuario = {
                email: email,
                senha: senha,
            }
            let containsEmail = tabCadast.some(elem => usuario.email === elem.email);
            if (tabCadast.length == 0 || !containsEmail) {
                tabCadast.push(usuario);
                localStorage.setItem("tabCadast", JSON.stringify(tabCadast));
                alert("Cadastrado realizado com sucesso!");
            } else {
                alert("Usuário já existente. Tente outro!");
            }
        } else {
            alert("Informe uma senha contendo pelo menos 5 caracteres.!");
        }
    } else {
        alert("Preencha todos os campos!");
    }
}

let login = () => {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email !== "" && senha !== "" && email !== null && senha !== null) {
        let tabCadast = JSON.parse(localStorage.getItem("tabCadast"));
        if (tabCadast === null || tabCadast.length == 0) {
            alert("Usuário não casdastrado!");
        } else {
            let usuario = {
                email: email,
                senha: senha,
            }
            
            let containsEmail = tabCadast.some(elem => usuario.email === elem.email);
            let contains = tabCadast.some(elem => JSON.stringify(usuario) === JSON.stringify(elem));
            
            if (contains) {
                window.open("tomagotchi.html", "_self");
            } else if (containsEmail) {
                alert("O email informado existe, porém a senha informada é inválida!");
            } else {
                alert("Tente outro usuário!");
            }
        }
    } else {
        alert("Prencher dados corretamente!");
    }
}

let limpar = () => {
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
}

let sair = () => {
    let sair = confirm("Deseja realizamente sair do jogo?");
    if(sair) window.open("index.html", "_self");
}