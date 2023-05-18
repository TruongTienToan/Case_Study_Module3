package com.example.dethmodule2.service;

import com.example.dethmodule2.model.Student;
import com.example.dethmodule2.utils.CSVUtils;

import java.util.ArrayList;
import java.util.List;

public class StudentService {
    public final static String PATH = "E:\\CODEGYM\\DeTHModule2\\src\\student.csv";
    private static StudentService instance;

    public static StudentService getInstance() {
        if (instance == null) {
            instance = new StudentService();
        }
        return instance;
    }

    public static List<Student> findAll() {
        List<Student> listStudent = new ArrayList<>();
        List<String> records = CSVUtils.readFile(PATH);
        for (String record : records) {
            listStudent.add(Student.parseStudent(record));
        }
        return listStudent;
    }

    public void addStudent(Student student) {
        List<Student> students = findAll();
        students.add(student);
        CSVUtils.writeFile(PATH, students);
    }

    public void update(Student newStudent) {
        List<Student> studentList = findAll();
        for (Student student : studentList) {
            if (newStudent.getIdStudent().equals(student.getIdStudent())) {
                String name = newStudent.getFullName();
                if (name != null && !name.isEmpty()) {
                    student.setFullName(newStudent.getFullName());
                }
                Integer age = newStudent.getAge();
                if (age != null) {
                    student.setAge(age);
                }
                String gender = newStudent.getGender();
                if (gender != null && !gender.isEmpty()) {
                    student.setGender(gender);
                }
                String address = newStudent.getAddress();
                if (address != null && !address.isEmpty()) {
                    student.setAddress(address);
                }
                Double mediumScore = newStudent.getMediumScore();
                if (mediumScore != null) {
                    student.setMediumScore(mediumScore);
                }
                CSVUtils.writeFile(PATH, studentList);
                break;
            }
        }
    }

    public void remove(Long idStudent) {
        List<Student> students = findAll();
        students.removeIf(id -> id.getIdStudent().equals(idStudent));
        CSVUtils.writeFile(PATH, students);
    }

    public Student findByID(Long idStudent) {
        List<Student> students = findAll();
        for (Student student : students) {
            if (student.getIdStudent().equals(idStudent)) {
                return student;
            }
        }
        return null;
    }

    public boolean existId(Long idStudent) {
        return findByID(idStudent) != null;
    }
}
