package com.keysijones.kdaily.repository;

import com.keysijones.kdaily.model.Article;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Long> {
    
}
