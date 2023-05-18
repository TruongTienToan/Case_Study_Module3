package com.example.casestudymodule3.model;

public class Category {
    private long idcategory;
    private String name;

    public Category() {

    }

    public Category(long idcategory, String name) {
        this.idcategory = idcategory;
        this.name = name;
    }

    public long getIdcategory() {
        return idcategory;
    }

    public void setIdcategory(long idcategory) {
        this.idcategory = idcategory;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
