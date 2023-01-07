import { Api } from "./api.js";
 class Logar {
  static login() {
    const emailUsuario = document.querySelector("#emailLogin");
    const senhaUsuario = document.querySelector("#passwordLogin");
    const buttonLogin = document.getElementById("btn-login");

    buttonLogin.addEventListener("click", async (event) => {
      event.preventDefault();
      const dadosLogin = {
        email: emailUsuario.value,
        password: senhaUsuario.value,
      };
console.log(dadosLogin)
      await Api.usuarioLogin(dadosLogin);
    });
  }
}
Logar.login();
