package com.keysijones.kdaily.controller;

import java.util.List;

import com.keysijones.kdaily.model.Article;
import com.keysijones.kdaily.service.ArticleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/")
public class HomePageController {
    
    @Autowired
    ArticleService articleService;

    @GetMapping("/")
    public String homePage() {
        return "Seja bem vindo ao backend do K-daily, um blog onde vou registrar tudo o que eu aprendo relacionado com tecnologia.";
    }

    @GetMapping("/articles")
    public List<Article> listar() {
        return articleService.findAll();
    }

    @PostMapping("/articles/new")
    public ResponseEntity<Article> novoPost(Article article) {
        articleService.save(article);

        return new ResponseEntity<Article>(article, HttpStatus.OK);
    }

}
