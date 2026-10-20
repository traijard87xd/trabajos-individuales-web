//A. Calculadora de IMC

function esNumeroValido(valor) {
  return typeof valor === "number" && !Number.isNaN(valor) && valor > 0;
}

function calcularIMC(peso, altura) {
  if (!esNumeroValido(peso) || !esNumeroValido(altura)) {
    throw new Error("Error: peso y altura deben ser números mayores que 0.");
  }
  return peso / (altura * altura);
}

function clasificarIMC(imc) {
  if (!esNumeroValido(imc)) {
    throw new Error("Error: el IMC debe ser un número mayor que 0.");
  }
  if (imc < 18.5) return "bajo peso";
  if (imc < 25) return "normal";
  if (imc < 30) return "sobrepeso";
  return "obesidad";
}

//B. FizzBuzz

function fizzBuzz(n) {
  if (typeof n !== "number" || Number.isNaN(n)) {
    throw new Error("Error: n debe ser un número (no vacío ni NaN).");
  }
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error(
      "Error: n debe ser un entero mayor que cero (sin negativos ni decimales).",
    );
  }

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

//Pruebas para ver si esta bien

function probarIMC(peso, altura) {
  try {
    const imc = calcularIMC(peso, altura);
    console.log(
      `Peso: ${peso} kg, altura: ${altura} m -> IMC: ${imc.toFixed(2)} (${clasificarIMC(imc)})`,
    );
  } catch (e) {
    console.log(e.message);
  }
}

function probarFizzBuzz(n) {
  console.log(`\nfizzBuzz(${n}):`);
  try {
    fizzBuzz(n);
  } catch (e) {
    console.log(e.message);
  }
}

console.log("--- IMC ---");
probarIMC(70, 1.75);
probarIMC(50, 1.8);
probarIMC(85, 1.7);
probarIMC(100, 1.65);
probarIMC(-5, 1.7);
probarIMC(70, 0);
probarIMC(NaN, 1.7);

console.log("\n--- FizzBuzz ---");
probarFizzBuzz(15);
probarFizzBuzz(0);
probarFizzBuzz(-3);
probarFizzBuzz(4.5);
probarFizzBuzz(NaN);
probarFizzBuzz();
