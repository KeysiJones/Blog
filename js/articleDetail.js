$(document).ready(function () {
  let id = window.location.search.substring(4);

  $.ajax({
    method: "get",
    url: `http://localhost:3001/post/${id}`,
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
