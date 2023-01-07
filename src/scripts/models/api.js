import { instancia } from "./axios.js";
import { Toast } from "./toast.js";


export class Api {
  static async listarPosts() {
    const posts = await instancia
      .get("/posts/?limit=10&offset=20/")
      .then((res) => res.data)
      .catch((err) => console.log(err));
  
      return posts;
  }

  static async cadastrarUsuario(data) {
    const usuarioCadastrado = await instancia

      .post("/users/", data)
      .then(async (resp) => {
        const novoData = {
          username: resp.data.username,
          password: data.password,
        };
      console.log("Cadastro Realizado!")
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static async usuarioLogin(data) {
    const usuarioLogin = await instancia
      .post("/users/login/", data)
      .then((resp) => {
        localStorage.setItem("@kenzieSocial:token", resp.data.token);

        console.log("Login Com sucesso");

        setTimeout(() => {
          window.location.replace("src/pages/home.html");
        }, 900);
      })
     
      .catch(() => {
       Toast.CriarPopup();
      });

    return usuarioLogin;
  }

  static async criarPost(data) {
    const novoPost = await instance
      .post("/posts/", data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {});

    return novoPost;
  }
}
