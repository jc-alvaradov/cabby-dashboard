import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.useXDomain = true;

export function graphRequest(domain) {
  return axios
    .get(`https://tn-server.herokuapp.com/${domain}`)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(`Hubo un error en la peticion al dominio ${domain}: ${err}`);
    });
}
