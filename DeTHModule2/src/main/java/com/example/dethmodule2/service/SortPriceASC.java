package com.example.dethmodule2.service;

import com.example.dethmodule2.model.Student;

import java.util.Comparator;

public class SortPriceASC implements Comparator<Student> {

    @Override
    public int compare(Student o1, Student o2) {
        return (int) (o1.getMediumScore() - o2.getMediumScore());
    }
}
