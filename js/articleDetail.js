$(document).ready(function () {
  let id = window.location.search.substring(4);

  const BASE_URL = "https://keysi-node-api.herokuapp.com";

  $.ajax({
    method: "get",
    url: `${BASE_URL}/post/${id}`,
    complete: (resposta) => {
      $("#postTitle").html(resposta.responseJSON.title);
      $("#postSubTitle").html(resposta.responseJSON.subtitle);
      $("#postCreatedDate").html(`Posted by
                <a href="https://www.linkedin.com/in/keysi-jones-fernandes-35482b139/">Keysi Jones</a>
                    on ${resposta.responseJSON.created}
                `);
      $("article").html(
        `
                <div id="postDetail">
                    <h1 class="articleTitle">${resposta.responseJSON.title}</h1>
                    <div>${resposta.responseJSON.body}</div>
                </div>
                `
      );
    },
  });
});
