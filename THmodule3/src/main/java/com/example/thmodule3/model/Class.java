package com.example.thmodule3.model;

public class Class {
    private int idClass;
    private String name;

    public Class(long idClass, String name) {

    }

    public Class(int idClass, String name) {
        this.idClass = idClass;
        this.name = name;
    }

    public int getIdClass() {
        return idClass;
    }

    public void setIdClass(int idClass) {
        this.idClass = idClass;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
