$(document).ready(function () {
    $('#summernote').summernote();

    $("#form-cadastrar-post").submit((evento) => {

        let title = document.querySelector("#form-title");
        let subTitle = document.querySelector("#form-subtitle");
        let content = document.querySelector("#summernote");

        console.log(title.value, subTitle.value, content.value)

        evento.preventDefault()
        
        let data = new Date()

        $.ajax({
            method: 'post',
            url: 'http://localhost:8080/articles/new',
            data: {
                title: title.value,
                subtitle: subTitle.value,
                content: content.value,
                created: Date.now()
            },
        })
    })
})