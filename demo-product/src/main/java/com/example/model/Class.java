package com.example.model;

public class Class {
    private long id;
    private String level;

    public Class() {

    }

    public Class(long id, String level) {
        this.id = id;
        this.level = level;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
