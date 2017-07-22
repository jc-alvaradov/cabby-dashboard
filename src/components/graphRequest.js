import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
axios.defaults.useXDomain = true;

export function graphRequest(domain, data){
  (!data) ? {} : data; 
  return axios.post(`http://localhost:3000/${domain}`, data)
  .then(res => {
    return res;
  }) // <--- return res
  .catch(err => {
    console.log(`Hubo un error en la peticion al dominio ${domain}: ${err}`);
  });
}


// se encarga de limpiar los datos antes de enviarlos. solo envia data en vez de data.data.data