/* Prueba para importar un fichero en formato JSON 
Importa el fichero ejemplo_json.json */

import myJson from './ejemplo_json.json' assert {type:'json'};

// 👇️ {
//   name: 'Alice',
//   country: 'Austria',
//   tasks: [ 'develop', 'design', 'test' ],
//   age: 30
// }
console.log(myJson.person);

console.log(myJson.person.name); // 👉️ "Alice"
console.log(myJson.person.country); // 👉️ "Austria"


