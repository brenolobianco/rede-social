import { Api } from "./api.js";
import { Renderizador } from "./render.js";

export class Posts {
  static criarPost() {
    const buttonNovoPost = document.querySelector("#btn-postar");
    const inputTitulo = document.querySelector(".input-title");
    const inputdescricao = document.querySelector(".input-text");
    
    buttonNovoPost.addEventListener("click", async () => {
      const data = {
        title: inputTitulo.value,
        description:inputdescricao.value
      };

       await Api.criarPost(data);
      const reload = await Api.listarPosts();
      Renderizador.renderizarPost(reload);
    });
  }
}
Posts.criarPost();


