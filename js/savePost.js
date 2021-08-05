$(document).ready(function () {
  $("#summernote").summernote();

  $("#form-cadastrar-post").submit((evento) => {
    let title = document.querySelector("#form-title");
    let subTitle = document.querySelector("#form-subtitle");
    let body = document.querySelector("#summernote");

    evento.preventDefault();

    let data = new Date();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + "-" + mm + "-" + yyyy;

    $.ajax({
      method: "post",
      url: "http://localhost:3001/posts",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({
        title: title.value,
        subtitle: subTitle.value,
        body: body.value,
        created: today,
      }),
      complete: (resposta) => {
        if (resposta.status == 200) {
          alert("Post cadastrado com sucesso.");
          window.location.href = "/";
          return;
        }

        alert(
          "Houve um erro ao cadastrar o seu post, tente novamente mais tarde."
        );
      },
    });
  });
});
