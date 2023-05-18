package com.example.service;

import com.example.model.Student;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class StudentServiceImpl implements IStudentService {
    private static final String FIND_ALL_CUSTOMER = "SELECT * FROM customer;";
    private static final String FIND_CUSTOMER_BY_ID = "SELECT * FROM customer WHERE id = ?";
    private static final String ADD_CUSTOMER = "INSERT INTO `customer` (`name`, `date_of_birth`, `email`, `address`,`phone`, `id_role`) VALUES (?, ?, ?, ?, ?, ?);";
    private static final String UPDATE_CUSTOMER = "UPDATE `customer` SET `name` = ?, `date_of_birth` = ?, `email` = ?, `address` = ?, `phone` = ?, `id_role` = ? WHERE (`id` = ?);";
    private static final String DELETE_CUSTOMER = "DELETE FROM `customer` WHERE (`id` = ?);";
    private static final String SELECT_CUSTOMER_PAGGING = "SELECT SQL_CALC_FOUND_ROWS * FROM customer where `name` like ? limit ?, ?";
    private static final String SELECT_CUSTOMER_CATEGORY_PAGGING = "SELECT SQL_CALC_FOUND_ROWS * FROM customer where `name` like ? and id_role = ? limit ?, ?;";
    private String jdbcURL = "jdbc:mysql://localhost:3306/customer_manager?allowPublicKeyRetrieval=true&useSSL=false";
    private String jdbcUsername = "root";
    private String jdbcPassword = "123456";
    private int noOfRecords;


    public Connection getConnection() {
        Connection connection = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            connection = DriverManager.getConnection(jdbcURL,jdbcUsername, jdbcPassword);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return connection;
    }


    @Override
    public List<Student> findAllCustomers() {
        List<Student>  customers = new ArrayList<>();
        try {
                Connection connection = getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(FIND_ALL_CUSTOMER);

            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                long idCustomer = resultSet.getLong("id");
                String name = resultSet.getString("name");
                String dateOfBirth = resultSet.getString("date_of_birth");
                String email = resultSet.getString("email");
                String address = resultSet.getString("address");
                Long idrole = resultSet.getLong("id_role");
                Long phone = resultSet.getLong("phone");

                //int id, String name, String dateOfBirth, String email, String address, int idLevel
                Student customer = new Student(idCustomer, name, Date.valueOf(dateOfBirth), email, address,phone, idrole);
                customers.add(customer);
            }

            System.out.println("findAllCustomers: " + preparedStatement);
            connection.close();

        } catch (SQLException sqlException) {
            printSQLException(sqlException);
        }
        return customers;
    }

    @Override
    public Student findCustomerById(long idCustomer) {
        Connection connection = getConnection();
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(FIND_CUSTOMER_BY_ID);
            preparedStatement.setLong(1, idCustomer);

            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                // Luôn lấy theo column label
                Student customer = getCustomerFromResultSet(resultSet);
                return customer;
            }
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
        return null;
    }

    private Student getCustomerFromResultSet(ResultSet resultSet) throws SQLException {
        long idCustomer = resultSet.getLong("id");
        String name = resultSet.getString("name");
        String dateOfBirth = resultSet.getString("date_of_birth");
        String email = resultSet.getString("email");
        String address = resultSet.getString("address");
        Long phone = resultSet.getLong("phone");
        Long idrole = resultSet.getLong("id_role");

        Student customer = new Student(idCustomer, name, Date.valueOf(dateOfBirth), email, address,phone, idrole);
        return customer;
    }

    public void printSQLException(SQLException ex) {
        for (Throwable e : ex) {
            if (e instanceof SQLException) {
                e.printStackTrace(System.err);
                System.err.println("SQLState: " + ((SQLException) e).getSQLState());
                System.err.println("Error Code: " + ((SQLException) e).getErrorCode());
                System.err.println("Message: " + e.getMessage());
                Throwable t = ex.getCause();
                while (t != null) {
                    System.out.println("Cause: " + t);
                    t = t.getCause();
                }
            }
        }
    }


    @Override
    public void addCustomer(Student customer) {
        try {
            Connection connection = getConnection();

            PreparedStatement preparedStatement = connection.prepareStatement(ADD_CUSTOMER);
            //INSERT INTO `customer` (`name`, `dateOfBirth`, `email`, `address`, `id role`)
            preparedStatement.setString(1, customer.getName());
            preparedStatement.setDate(2, customer.getDateOfBirth());
            preparedStatement.setString(3, customer.getEmail());
            preparedStatement.setString(4, customer.getAddress());
            preparedStatement.setLong(5, customer.getPhone());
            preparedStatement.setLong(6, customer.getLevel());

            System.out.println("addCustomer: " + preparedStatement);

            preparedStatement.executeUpdate();
            connection.close();
        } catch (SQLException sqlException) {
            printSQLException(sqlException);
        }
    }

    @Override
    public void updateCustomer(long idCustomer, Student customer) {
        try {
            Connection connection = getConnection();

            //"UPDATE `customer` SET `name` = ?, `date_of_birth` = ?,
            // `email` = ?, `address` = ?, `id_role` = ? WHERE (`id` = ?);"
            PreparedStatement preparedStatement = connection.prepareStatement(UPDATE_CUSTOMER);
            preparedStatement.setString(1, customer.getName());
            preparedStatement.setDate(2, customer.getDateOfBirth());
            preparedStatement.setString(3, customer.getEmail());
            preparedStatement.setString(4, customer.getAddress());
            preparedStatement.setLong(5, customer.getPhone());
            preparedStatement.setLong(6, customer.getLevel());
            preparedStatement.setLong(7, customer.getId());

            preparedStatement.executeUpdate();
            System.out.println("updateProduct: " + preparedStatement);

            connection.close();
        } catch (SQLException sqlException) {
            printSQLException(sqlException);
        }
    }

    @Override
    public void deleteCustomer(long idCustomer) {
        try {
            Connection connection = getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(DELETE_CUSTOMER);
            preparedStatement.setLong(1, idCustomer);

            preparedStatement.executeUpdate();

            System.out.println("deleteProduct: " + preparedStatement);

        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
    }

    @Override
    public long maxId() {
        return 0;
    }

    @Override
    public List<Student> findAllCustomerPagging(String kw, long idLevel, int offset, int limit) {
        List<Student> customers = new ArrayList<>();
        try {
            Connection connection = getConnection();
            PreparedStatement preparedStatement;
            if (idLevel == -1) {
                //"SELECT * FROM customer where `name` like ? limit ?, ?";
                preparedStatement = connection.prepareStatement(SELECT_CUSTOMER_PAGGING);
                preparedStatement.setString(1, "%" + kw + "%");
                preparedStatement.setInt(2, offset);
                preparedStatement.setInt(3, limit);
            } else {
                //SELECT * FROM customer where `name` like ? and id_role = ? limit ?, ?;
                preparedStatement = connection.prepareStatement(SELECT_CUSTOMER_CATEGORY_PAGGING);
                preparedStatement.setString(1, "%" + kw + "%");
                preparedStatement.setLong(2, idLevel);
                preparedStatement.setInt(3, offset);
                preparedStatement.setInt(4, limit);
            }
            System.out.println("findAllCustomerPagging" + preparedStatement);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                Student customer = getCustomerInfo(resultSet);
                customers.add(customer);
            }
            resultSet = preparedStatement.executeQuery("SELECT FOUND_ROWS()");
            while (resultSet.next()) {
                noOfRecords = resultSet.getInt(1);
            }
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
        return customers;
    }

    private Student getCustomerInfo(ResultSet resultSet) throws SQLException {
        long idCustomer = resultSet.getLong("id");
        String name = resultSet.getString("name");
        String email = resultSet.getString("email");
        String address = resultSet.getString("address");
        Long phone = resultSet.getLong("phone");
        Date dateOfBirth = resultSet.getDate("date_of_birth");
        long idLevel = resultSet.getLong("id_role");
        Student customer = new Student(idCustomer, name, dateOfBirth, email, address, phone, idLevel);
        return customer;
    }

    @Override
    public int getNoOfRecords() {
        return this.noOfRecords;
    }
}
