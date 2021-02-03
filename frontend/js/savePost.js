$(document).ready(function () {
    $('#summernote').summernote();

    $("#form-cadastrar-post").submit((evento) => {

        let title = document.querySelector("#form-title");
        let subTitle = document.querySelector("#form-subtitle");
        let content = document.querySelector("#summernote");

        console.log(title.value, subTitle.value, content.value)

        evento.preventDefault()
        
        let data = new Date()

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '-' + dd + '-' + yyyy;
        

        $.ajax({
            method: 'post',
            url: 'https://kdevblog.herokuapp.com/articles/new',
            data: {
                title: title.value,
                subtitle: subTitle.value,
                content: content.value,
                created: "hello"
            },
        })
    })
})