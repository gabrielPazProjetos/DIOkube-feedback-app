$("#button-blue").on("click", function () {
  var txt_nome = $("#name").val().trim();
  var txt_email = $("#email").val().trim();
  var txt_comentario = $("#comment").val().trim();

  if (!txt_nome || !txt_email || !txt_comentario) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  $.ajax({
    url: "https://backend-service/mensagens.php",
    type: "POST",
    data: {
      nome: txt_nome,
      email: txt_email,
      comentario: txt_comentario
    },
    beforeSend: function () {
      console.log("Tentando enviar os dados...");
    }
  })
    .done(function (response) {
      alert("Dados enviados com sucesso!");
      console.log("Resposta do servidor:", response);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      alert("Erro ao enviar os dados: " + textStatus);
      console.error("Detalhes do erro:", errorThrown);
    });
});
