package com.example.model;

import java.sql.Date;

public class Student {
    private long id;
    private String name;
    private Date dateOfBirth;
    private String email;
    private String address;

    private long phone;
    private long idLevel;

    public Student(long id, String name, Date dateOfBirth, String email, String address,long phone, long idLevel) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.idLevel = idLevel;
    }

    public Student() {

    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public long getLevel() {
        return idLevel;
    }

    public void setLevel(long level) {
        this.idLevel = level;
    }

    public long getPhone() {
        return phone;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }
}
