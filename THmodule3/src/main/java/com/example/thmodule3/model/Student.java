package com.example.thmodule3.model;

import java.util.Date;

public class Student {
    private int idStudent;
    private String name;
    private Date date_of_birth;
    private String address;
    private Long phone_number;
    private String email;
    private int idClass;

    public Student() {

    }

    public Student(int idStudent, String name, Date date_of_birth, String address, Long phone_number, String email, int idClass) {
        this.idStudent = idStudent;
        this.name = name;
        this.date_of_birth = date_of_birth;
        this.address = address;
        this.phone_number = phone_number;
        this.email = email;
        this.idClass = idClass;
    }

    public int getIdStudent() {
        return idStudent;
    }

    public void setIdStudent(int idStudent) {
        this.idStudent = idStudent;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(Date date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(Long phone_number) {
        this.phone_number = phone_number;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getIdClass() {
        return idClass;
    }

    public void setIdClass(int idClass) {
        this.idClass = idClass;
    }
}
