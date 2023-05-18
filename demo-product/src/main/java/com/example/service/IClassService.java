package com.example.service;

import com.example.model.Class;

import java.util.List;

public interface IClassService {
    List<Class> findAllLevel();
    Class findLevelById(long idLevel);
}
