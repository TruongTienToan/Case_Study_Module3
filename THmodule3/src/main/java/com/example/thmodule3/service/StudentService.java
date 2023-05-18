package com.example.thmodule3.service;

import com.example.thmodule3.connection.DBContext;
import com.example.thmodule3.model.Student;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class StudentService extends DBContext {
    private static final String FIND_ALL_STUDENT = "SELECT * FROM student;";
    private static final String FIND_STUDENT_BY_ID = "SELECT * FROM student WHERE idStudent = ?";
    private static final String ADD_STUDENT = "INSERT INTO `student` (`name`, `date_of_birth`, `address`,`phone_number` ,`email`, `idClass`) VALUES (?, ?, ?, ?, ?, ?);";
    private static final String UPDATE_STUDENT = "UPDATE `student` SET `name` = ?, `date_of_birth` = ?, `address` = ?, `phone_number` = ?, `email` = ?, `idClass` = ? WHERE (`id` = ?);";
    private static final String DELETE_STUDENT = "DELETE FROM `student` WHERE (`idStudent` = ?);";
    private static final String SELECT_STUDENT_PAGGING = "SELECT SQL_CALC_FOUND_ROWS * FROM student where `name` like ? limit ?, ?";
    private static final String SELECT_STUDENT_CATEGORY_PAGGING = "SELECT SQL_CALC_FOUND_ROWS * FROM student where `name` like ? and idClass = ? limit ?, ?;";

    private int noOfRecords;

    public List<Student> findAllStudent() {
        List<Student>  students = new ArrayList<>();
        try {
            Connection connection = getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(FIND_ALL_STUDENT);

            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                int idStudent = resultSet.getInt("idStudent");
                String name = resultSet.getString("name");
                String date_of_birth = resultSet.getString("date_of_birth");
                String address = resultSet.getString("address");
                Long phone_number = resultSet.getLong("phone_number");
                String email = resultSet.getString("email");

                int idClass = resultSet.getInt("idClass");

                //int id, String name, String dateOfBirth, String email, String address, int idLevel
                Student student = new Student(idStudent, name, Date.valueOf(date_of_birth),  address, phone_number ,email,idClass);
                students.add(student);
            }

            System.out.println("findAllCustomers: " + preparedStatement);
            connection.close();

        } catch (SQLException sqlException) {
            printSQLException(sqlException);
        }
        return students;
    }


    public Student findStudentById(long idStudent) {
        Connection connection = getConnection();
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(FIND_STUDENT_BY_ID);
            preparedStatement.setLong(1, idStudent);

            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                // Luôn lấy theo column label
                Student student = getStudentFromResultSet(resultSet);
                return student;
            }
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
        return null;
    }


    private Student getStudentFromResultSet(ResultSet resultSet) throws SQLException {
        int idStudent = resultSet.getInt("idStudent");
        String name = resultSet.getString("name");
        String date_of_birth = resultSet.getString("date_of_birth");
        String address = resultSet.getString("address");
        Long phone_number = resultSet.getLong("phone_number");
        String email = resultSet.getString("email");
        int idClass = resultSet.getInt("idClass");

        Student student = new Student(idStudent, name, Date.valueOf(date_of_birth),  address, phone_number ,email,idClass);
        return student;
    }



    public void addStudent(Student student) {
        try {
            Connection connection = getConnection();

            PreparedStatement preparedStatement = connection.prepareStatement(ADD_STUDENT);
            //(`name`, `date_of_birth`, `address`,`phone_number` ,`email`, `idClass`)
            preparedStatement.setString(1, student.getName());
            preparedStatement.setDate(2, (Date) student.getDate_of_birth());
            preparedStatement.setString(3, student.getAddress());
            preparedStatement.setLong(4, student.getPhone_number());
            preparedStatement.setString(5, student.getEmail());
            preparedStatement.setLong(6, student.getIdClass());

            System.out.println("addCustomer: " + preparedStatement);

            preparedStatement.executeUpdate();
            connection.close();
        } catch (SQLException sqlException) {
            printSQLException(sqlException);
        }
    }


    public void updateStudent(long idStudent, Student student) {
        try {
            Connection connection = getConnection();


            PreparedStatement preparedStatement = connection.prepareStatement(UPDATE_STUDENT);
            preparedStatement.setString(1, student.getName());
            preparedStatement.setDate(2, (Date) student.getDate_of_birth());
            preparedStatement.setString(3, student.getAddress());
            preparedStatement.setLong(4, student.getPhone_number());
            preparedStatement.setString(5, student.getEmail());
            preparedStatement.setLong(6, student.getIdClass());
            preparedStatement.setLong(7, student.getIdStudent());

            preparedStatement.executeUpdate();
            System.out.println("updateProduct: " + preparedStatement);

            connection.close();
        } catch (SQLException sqlException) {
            printSQLException(sqlException);
        }
    }


    public void deleteStudent(long idStudent) {
        try {
            Connection connection = getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(DELETE_STUDENT);
            preparedStatement.setLong(1, idStudent);

            preparedStatement.executeUpdate();

            System.out.println("deleteProduct: " + preparedStatement);

        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
    }


    public long maxId() {
        return 0;
    }


    public List<Student> findAllStudentPagging(String kw, long idLevel, int offset, int limit) {
        List<Student> students = new ArrayList<>();
        try {
            Connection connection = getConnection();
            PreparedStatement preparedStatement;
            if (idLevel == -1) {
                //"SELECT * FROM customer where `name` like ? limit ?, ?";
                preparedStatement = connection.prepareStatement(SELECT_STUDENT_PAGGING);
                preparedStatement.setString(1, "%" + kw + "%");
                preparedStatement.setInt(2, offset);
                preparedStatement.setInt(3, limit);
            } else {
                //SELECT * FROM customer where `name` like ? and id_role = ? limit ?, ?;
                preparedStatement = connection.prepareStatement(SELECT_STUDENT_CATEGORY_PAGGING);
                preparedStatement.setString(1, "%" + kw + "%");
                preparedStatement.setLong(2, idLevel);
                preparedStatement.setInt(3, offset);
                preparedStatement.setInt(4, limit);
            }
            System.out.println("findAllCustomerPagging" + preparedStatement);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                Student student = getStudentInfo(resultSet);
                students.add(student);
            }
            resultSet = preparedStatement.executeQuery("SELECT FOUND_ROWS()");
            while (resultSet.next()) {
                noOfRecords = resultSet.getInt(1);
            }
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
        return students;
    }

    private Student getStudentInfo(ResultSet resultSet) throws SQLException {
        int idStudent = resultSet.getInt("idStudent");
        String name = resultSet.getString("name");
        String date_of_birth = resultSet.getString("date_of_birth");
        String address = resultSet.getString("address");
        Long phone_number = resultSet.getLong("phone_number");
        String email = resultSet.getString("email");
        int idClass = resultSet.getInt("idClass");
        Student student = new Student(idStudent, name, Date.valueOf(date_of_birth),  address, phone_number ,email,idClass);
        return student;
    }


    public int getNoOfRecords() {
        return this.noOfRecords;
    }
}
