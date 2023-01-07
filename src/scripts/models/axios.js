const token = localStorage.getItem("@kenzieSocial:token") ||'';

export const instancia = axios.create({
  baseURL: "https://m2-rede-social.herokuapp.com/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  },
});