package com.example.service;

import com.example.model.Student;

import java.util.List;

public interface IStudentService {
    List<Student> findAllCustomers();
    void addCustomer(Student customer);
    void updateCustomer(long idCustomer, Student customer);
    void deleteCustomer(long idCustomer);

    Student findCustomerById(long idCustomer);
    long maxId();
    List<Student> findAllCustomerPagging(String kw, long idLevel, int offset, int limit);
    int getNoOfRecords();
}
