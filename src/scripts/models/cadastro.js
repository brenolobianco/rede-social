import { Api } from "./api.js";

class Cadastrar { 
  static cadastrar() {
    const nomeUsuario = document.querySelector("#nomeUsuario");
    const emailUsuario = document.querySelector("#emailCadastro");
    const imagemUsuario = document.querySelector("#fotoUsuario");
    const trabalhoUsuario = document.querySelector("#trabalhoUsuario");
    const senhaUsuario = document.querySelector("#passwordCadastro");
    const btnCadastrar = document.querySelector("#btnCadastrar");

    btnCadastrar.addEventListener("click", async (event) => {
      event.preventDefault();
      const dadosCadastro = {
        username: nomeUsuario.value,
        email: emailUsuario.value,
        work_at: trabalhoUsuario.value,
        password: senhaUsuario.value,
        image: imagemUsuario.value,
      };
      console.log(dadosCadastro);
      await Api.cadastrarUsuario(dadosCadastro);
    });
  }
  }
Cadastrar.cadastrar();

