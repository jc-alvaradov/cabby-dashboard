export function makeQuery (type, resolver, props, vars, vartypes) {
  // type puede ser query o mutation
  // resolver guarda el nombre del resolver que se usara, ej: getRides
  // vars es un objeto {} con keys que corresponden a variables para la query
  // varDef es un objeto {} con keys que corresponden a las variables y sus definiciones
  // props es un array [] con los datos que se pediran en la query, ej: name, id, status
    
  if(vars) {
    const vardefs = Object.keys(vars).map((key) => `${key}: $${key}`);
    return {
      "query": `${type}(${vartypes.toString()}) { ${resolver}(${vardefs}){ ${props.join(" ")}}}`, 
      "variables": vars
    };
  }else {
   return {"query": `${type} { ${resolver}{ ${props.join(" ")}}}`};
  }
}

// vars
// state: active

// vartypes
// $state: String!
// $clientName: String!