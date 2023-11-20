function validaNumero() {
  const campoA = document.getElementById("campoA").value;
  const campoB = document.getElementById("campoB").value;

  const numeroA = parseFloat(campoA, 10);
  const numeroB = parseFloat(campoB, 10);

  let mensagem;

  if (isNaN(numeroA) || isNaN(numeroB)) {
    mensagem = "Preencha todos os campos com números válidos.";
    document.querySelector(".message").style.backgroundColor = "#fae333";
    document.querySelector(".message").style.color = "#000";
  } else if (numeroB == numeroA) {
    mensagem = "Os números são iguais";
    document.querySelector(".message").style.backgroundColor = "#fae333";
    document.querySelector(".message").style.color = "#000";
  } else if (numeroB > numeroA) {
    mensagem = `O número do campo B (${numeroB}) é maior, formulário válido!`;
    document.querySelector(".message").style.backgroundColor = "green";
    document.querySelector(".message").style.color = "#fff";
  } else {
    mensagem = `O número do campo A (${numeroA}) é maior, formulário inválido!`;
    document.querySelector(".message").style.backgroundColor = "red";
    document.querySelector(".message").style.color = "#fff";
  }

  const messageDiv = document.querySelector(".message");
  messageDiv.innerHTML = mensagem;

  // messageDiv.style.backgroundColor = numeroB > numeroA ? "green" : "red";

  messageDiv.style.display = "block";
}
