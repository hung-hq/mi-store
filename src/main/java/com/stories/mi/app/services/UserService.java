package com.stories.mi.app.services;

import com.stories.mi.app.models.User;

import java.util.List;

public interface UserService {
    List<User> findAll();

    List<User> findByTop(Integer limit);
}
