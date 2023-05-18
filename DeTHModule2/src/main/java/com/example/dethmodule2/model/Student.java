package com.example.dethmodule2.model;

import com.example.dethmodule2.service.StudentService;

import java.util.Objects;

public class Student {
    private Long idStudent;
    private String fullName;
    private Integer age;
    private String gender;
    private String address;
    private Double mediumScore;

    public Student() {

    }

    public Student(Long idStudent, String fullName, Integer age, String gender, String address, Double mediumScore) {
        this.idStudent = idStudent;
        this.fullName = fullName;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.mediumScore = mediumScore;
    }

    public Long getIdStudent() {
        return idStudent;
    }

    public void setIdStudent(Long idStudent) {
        this.idStudent = idStudent;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Double getMediumScore() {
        return mediumScore;
    }

    public void setMediumScore(Double mediumScore) {
        this.mediumScore = mediumScore;
    }

    public static Student parseStudent(String rawStudent) {
        String[] array = rawStudent.split(",");
        Student student = new Student();
        student.setIdStudent(Long.parseLong(array[0]));
        student.setFullName(array[1]);
        student.setAge(Integer.parseInt(array[2]));
        student.setGender(array[3]);
        student.setAddress(array[4]);
        student.setMediumScore(Double.parseDouble(array[5]));
        return student;
    }

    @Override
    public int hashCode() {
        return Objects.hash(idStudent,fullName,age,gender,address,mediumScore);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Student student = (Student) obj;
        return Objects.equals(idStudent, student.idStudent) && Objects.equals(fullName, student.fullName) && Objects.equals(age, student.age) && Objects.equals(gender, student.gender) && Objects.equals(address, student.address) && Objects.equals(mediumScore, student.mediumScore);
    }

    @Override
    public String toString() {
        return String.format("%s,%s,%s,%s,%s,%s",
                idStudent,
                fullName,
                age,
                gender,
                address,
                mediumScore);
    }
}
