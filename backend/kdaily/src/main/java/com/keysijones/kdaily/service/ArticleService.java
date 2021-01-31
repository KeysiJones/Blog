package com.keysijones.kdaily.service;

import java.util.List;

import com.keysijones.kdaily.model.Article;

public interface ArticleService {

    List<Article> findAll();
    Article findById(long id);
    Article save(Article article);
    
}
