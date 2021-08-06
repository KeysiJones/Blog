$(document).ready(function () {
  const BASE_URL = "http://localhost:3001";

  console.log("testando 123");
  $.ajax({
    method: "get",
    url: `${BASE_URL}/posts`,

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
