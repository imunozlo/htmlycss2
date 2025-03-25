/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


document.addEventListener("DOMContentLoaded", () => {
  const ingredientSelect = document.getElementById("ingredient-select");
  const ingredientInfo = document.getElementById("ingredient-info");
  const ingredientsSection = document.querySelector(".ingredients");

  // Objeto con los ingredientes y su uso
  const ingredientUsage = {
    romero: "Muy común",
    caracoles: "Común",
    guisantes: "Poco común",
    chorizo: "Nada común",
    maiz: "Nada común",
    tirabeques: "Común",
    pato: "Poco común",
    niscalos: "Poco común",
    pimiento: "Muy común"
  };

  // Asigna un color a cada nivel de "común"
  function getColorByUsage(usage) {
    switch (usage) {
      case "Muy común":
        return "#c8f7c5"; // Verde claro
      case "Común":
        return "#f2fac5"; // Amarillo suave
      case "Poco común":
        return "#ffeebb"; // Beige suave
      case "Nada común":
        return "#ffccc7"; // Rojo clarito
      default:
        return "linear-gradient(135deg, #f0fdf4, #dcfce7)"; // El degradado original
    }
  }

  // Función para capitalizar la primera letra
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  ingredientSelect.addEventListener("change", function () {
    const value = this.value;
    if (value && ingredientUsage[value]) {
      const usage = ingredientUsage[value];
      ingredientInfo.textContent = `${capitalize(value)}: ${usage}`;
      // Cambia el color de fondo de la sección
      ingredientsSection.style.background = getColorByUsage(usage);
    } else {
      ingredientInfo.textContent = "";
      // Restablece el fondo original (por si vuelves a seleccionar -- Elige un ingrediente --)
      ingredientsSection.style.background = "linear-gradient(135deg, #f0fdf4, #dcfce7)";
    }
  });
});

