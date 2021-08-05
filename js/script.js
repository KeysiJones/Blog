$(document).ready(function () {
  let data = new Date();

  $.ajax({
    method: "get",
    url: "http://localhost:3001/posts",

    complete: (resposta) => {
      resposta.responseJSON.posts.map((article) => {
        $("#articles").append(`
                <div class="post-preview">
                    <a href="/articles.html?id=${article.id}">
                    <h2 class="post-title">
                        ${article.title}
                    </h2>
                    <h3 class="post-subtitle">
                        ${article.subtitle}
                    </h3>
                    </a>
                    <p class="post-meta">Posted by
                    <a href="#">Keysi Jones</a>
                    on ${article.created}</p>
                </div>
            `);
      });
    },
  });
});
