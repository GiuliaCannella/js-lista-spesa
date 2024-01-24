// Data una lista della spesa,
// stampare sulla pagina (anche brutalmente,
//     basta che si vedano) gli elementi della lista individualmente
//     con un ciclo while.

const ingredients = ["pane", "uova", "farina", "pasta"];
const spesa = document.getElementById("spesa");

let list = "<ul>";
// for (let i = 0; i < ingredients.length; i++) {
//     let ingrediente = ingredients[i]
//     list+=`<li>${ingrediente}</li>`
// }

let i = 0;
while (i < ingredients.length) {
  let ingrediente = ingredients[i];
  console.log(ingrediente);
  list += `<li>${ingrediente}</li>`;
  i++;
}

list += "</ul>";
console.log(list);
spesa.innerHTML = list;
