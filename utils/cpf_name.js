const { generate } = require("gerador-validador-cpf");

const cpfNome = () => {
  var cpf = generate({ format: true });
  var cpfName = cpf + " - Rodrigo Homer";
  return cpfName;
};

const soma = (num1, num2) => {
  var somatorio = num1 + num2;
  return somatorio;
};

exports.cpfNome = cpfNome;
exports.soma = soma;
