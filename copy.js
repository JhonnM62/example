// Obtener referencia al elemento por ID
const myElement = document.getElementById("myDiv");

// Obtener el nodo padre del elemento
const parentElement = myElement.parentNode;
console.log(parentElement.tagName); // Imprime "BODY"

// Obtener una lista de nodos hijos del elemento
const childNodes = myElement.childNodes;
console.log(childNodes.length); // Imprime 3 (incluye nodos de texto)

// Obtener una lista de elementos hijos del elemento
const children = myElement.children;
console.log(children.length); // Imprime 2 (excluye nodos de texto)

// Obtener la primera coincidencia de elemento con el selector CSS
const firstMatch = myElement.querySelector(".myClass");
console.log(firstMatch.textContent); // Imprime "Contenido de párrafo"

// Obtener una lista de todas las coincidencias de elementos con el selector CSS
const allMatches = myElement.querySelectorAll("li");
allMatches.forEach((match) => console.log(match.textContent)); // Imprime los contenidos de los elementos de la lista

// Obtener el contenido HTML del elemento
const htmlContent = myElement.innerHTML;
console.log(htmlContent); // Imprime el contenido HTML del div

// Obtener el contenido de texto del elemento y sus descendientes
const textContent = myElement.textContent;
console.log(textContent); // Imprime el contenido de texto del div

// Obtener el valor de un atributo en el elemento
const attributeValue = myElement.getAttribute("class");
console.log(attributeValue); // Imprime "myClass"

// Establecer un valor de atributo en el elemento
myElement.setAttribute("data-value", "123");

// Obtener una lista de las clases CSS aplicadas al elemento
const classList = myElement.classList;
console.log(classList); // Imprime una lista de las clases CSS aplicadas al div

// Obtener los estilos CSS aplicados al elemento
const styles = myElement.style;
console.log(styles.backgroundColor); // Imprime el valor del estilo de fondo del div
