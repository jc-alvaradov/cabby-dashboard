import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.useXDomain = true;

// check axios props

export function graphRequest(domain, data) {
  !data ? {} : data; // esto esta bien? no debiera ser data = {}?
  return axios
    .post(`https://tn-server.herokuapp.com/${domain}`, data)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(`Hubo un error en la peticion al dominio ${domain}: ${err}`);
    });
}
