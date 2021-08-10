$(function () {
  $("#summernote").summernote();

  const BASE_URL = "https://keysi-node-api.herokuapp.com";

  let title = document.querySelector("#form-title");
  let subtitle = document.querySelector("#form-subtitle");
  let body = document.querySelector(
    "#form-cadastrar-post > div:nth-child(3) > div > div.note-editing-area > div.note-editable.card-block"
  );

  let postId = window.location.search.substring(4);

  $.ajax({
    method: "get",
    url: `${BASE_URL}/post/${postId}`,
    complete: (resposta) => {
      if (resposta.status == 200) {
        title.value = resposta.responseJSON.title;
        subtitle.value = resposta.responseJSON.subtitle;
        body.innerHTML = resposta.responseJSON.body;
      } else {
        alert(
          "Houve um erro ao cadastrar o seu post, tente novamente mais tarde."
        );
      }
    },
  });

  $("#form-cadastrar-post").submit((evento) => {
    evento.preventDefault();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + "-" + mm + "-" + yyyy;

    $.ajax({
      method: "put",
      url: `${BASE_URL}/post/${postId}`,
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({
        id: postId,
        title: title.value,
        subtitle: subtitle.value,
        body: body.innerHTML,
        created: today,
      }),
      complete: (resposta) => {
        if (resposta.status == 200) {
          alert("Post atualizado com sucesso.");
          window.location.href = "/";
          return;
        }

        alert(
          "Houve um erro ao atualizar o seu post, tente novamente mais tarde."
        );
      },
    });
  });
});
