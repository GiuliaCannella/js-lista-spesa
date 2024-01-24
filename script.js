// Data una lista della spesa,
// stampare sulla pagina (anche brutalmente,
//     basta che si vedano) gli elementi della lista individualmente
//     con un ciclo while.

const ingredient = ["pane", "uova", "farina", "pasta"];
const spesa = document.getElementById("spesa");

let list = "<ul>";
// for (let i = 0; i < ingredient.length; i++) {
//     let items = ingredient[i]
//     list+=`<li>${items}</li>`
// }

let i = 0;
while (i < ingredient.length) {
  let items = ingredient[i];
  console.log(items);
  list += `<li>${items}</li>`;
  i++;
}

list += "</ul>";
console.log(list);
spesa.innerHTML = list;
