const div1 = document.getElementById('thing_to_do');
const text1 = ['Práctica de Javascript', 'Ir al Supermercado', 'Pasear al Perro', 'Lavar los Trastes'];
const h11 = document.createElement('h1');
h11.innerHTML = 'Lista de Tareas';
div1.appendChild(h11);
const ul1 = document.createElement("ul");
div1.appendChild(ul1);

for (var i = 0; i < text1.length; i++){
    const li1 = document.createElement('li');
    ul1.appendChild(li1);
    const input1 = document.createElement('input');
    input1.setAttribute('type', 'checkbox');
    input1.setAttribute('id', 'tarea-' + (i + 1));
    li1.appendChild(input1);
    const label1 = document.createElement('label');
    label1.setAttribute('for', 'tarea-' + (i + 1));
    label1.innerHTML = text1[i];
    li1.appendChild(label1);
}
