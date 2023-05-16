function calculateCost() {
  const custoSubstituicao = parseFloat(document.getElementById("custo-substituicao").value);
  const numFuncionarios = parseFloat(document.getElementById("num-funcionarios").value);
  const cost = (custoSubstituicao / numFuncionarios) * 100;
  document.getElementById("result").innerHTML = `Custo de Rotatividade: ${cost.toFixed(2)}%`;
}
