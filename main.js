$(document).ready(function () {
  var nomeDaLista;
  $("#botao-adicionar").click(function (e) {
    e.preventDefault();

    var inputNomeTarefa = $("#nome-tarefa").val();

    if (inputNomeTarefa == "") {
      alert("Digite uma tarefa para lista");
    } else {
      $("#minha-lista").append("<li>" + inputNomeTarefa + "</li>");
      $("#nome-tarefa").val("");
      $(".listas").css("display", "block");
    }
  });

  $(document).on("click", "li", function () {
    $(this).toggleClass("riscado");
  });

  $("#botao-resetar").click(function () {
    $("#minha-lista").empty("");
    $(".nomear-lista-off").css("display", "block");
    $(".listas").css("display", "none");
    nomeDaLista = "";
    $("#titulo-lista h2:first").remove();
    $("#titulo-lista h2:contains('nomeDaLista')").remove();
  });

  $("#botao-nomear").click(function (e) {
    e.preventDefault();
    nomeDaLista = $("#nome-lista").val();
    if (nomeDaLista == "") {
      alert("Digite um nome para lista");
    } else {
      $("#titulo-lista").prepend("<h2>" + nomeDaLista + "</h2>");
      $(".nomear-lista-off").css("display", "none");
      $(".listas").css("display", "block");
    }
  });
});
