package com.keysijones.kdaily.service.serviceImpl;

import java.util.List;

import com.keysijones.kdaily.model.Article;
import com.keysijones.kdaily.repository.ArticleRepository;
import com.keysijones.kdaily.service.ArticleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArticleSeviceImpl implements ArticleService {
    
    @Autowired
    ArticleRepository articleRepository;

    @Override
    public List<Article> findAll() {
        return articleRepository.findAll();
    }

    @Override
    public Article findById(long id) {
        return articleRepository.findById(id).get();
    }

    @Override
    public Article save(Article article) {
        return articleRepository.save(article);
    }

}