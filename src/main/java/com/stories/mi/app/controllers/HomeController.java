package com.stories.mi.app.controllers;

import java.util.List;

import com.stories.mi.app.models.User;
import com.stories.mi.app.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
    private UserService userService;

    @RequestMapping("/")
    public String index() {
        return "index.html";
    }

    @RequestMapping("/users")
    @ResponseBody
    public List<User> findAllUsers(){
        return userService.findAll();
    }

    @Autowired
    public void setUserService(UserService userService){
        this.userService = userService;
    }
}
