package com.keysijones.kdaily.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/")
public class HomePageController {
    
    @GetMapping("/")
    public String homePage() {
        return "Seja bem vindo ao backend do K-daily, um blog onde vou registrar tudo o que eu aprendo relacionado com tecnologia.";
    }

}
