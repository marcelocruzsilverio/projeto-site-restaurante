$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      mensagem: {
        required: true,
      },
    },
    errorElement: "label",
    // errorClass: "invalid-feedback",
    errorPlacement: function (error, element) {
      error.insertAfter(element);
    },
    messages: {
      nome: "Por favor, insira o seu nome.",
      telefone: "Por favor, insira o seu telefone.",
      email: "Por favor, insira o seu email.",
      mensagem:'Por favor, insira uma mensagem.'
    },
    
  });
});
