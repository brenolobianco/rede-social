import { Api } from "./api.js";

export class Renderizador {
  static renderizarPost(arrCards) {
    const container = document.querySelector(".post-list");

    arrCards.forEach((cliente) => {
      const post = this.criarPost(cliente);
      console.log(post)
      container.appendChild(post);
    });
  }

  static criarPost(data) {
    
    const post = document.createElement("li");
    
    const imagemProfile = document.createElement("img");

    const nameSection = document.createElement("div");
    const nomeUsuario = document.createElement("h2");
    const profissaoUsuario = document.createElement("h3");

    const bodyText = document.createElement("div");
    const tituloPost = document.createElement("h4");
    const textoPost = document.createElement("h5");

    const footerPost = document.createElement("div");
    const buttonPost = document.createElement("button");
    
    imagemProfile.src = data.author.image;
    nomeUsuario.innerText = data.author.username;
    profissaoUsuario.innerText=data.author.work_at;
    tituloPost.innerText = data.title;
    textoPost.innerText = data.description;
    buttonPost.innerText ='Abrir Post'
   
    post.classList = "post-profile";
   
    bodyText.classList ='body-text'
    footerPost.classList ='footer-post'
    buttonPost.classList='btn-modal'

  
    post.append(imagemProfile,nameSection,nomeUsuario, profissaoUsuario,bodyText)
   
    bodyText.append(tituloPost, textoPost,footerPost);
    footerPost.append(buttonPost);

    return post;
  }

  }
const basePosts = await Api.listarPosts();

 Renderizador.renderizarPost(basePosts.results);
