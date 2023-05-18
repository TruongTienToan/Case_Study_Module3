package com.example.service;

import com.example.model.Class;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ClassServiceImpl implements IClassService {
    private static final String FIND_ALL_LEVEL = "SELECT * FROM level;";
    private static final String FIND_LEVEL_BY_ID = "SELECT * FROM level where id = ?";
    private String jdbcURL = "jdbc:mysql://localhost:3306/customer_manager?allowPublicKeyRetrieval=true&useSSL=false";
    private String jdbcUsername = "root";
    private String jdbcPassword = "123456";


    public Connection getConnection() {
        Connection connection = null;
        try {
            java.lang.Class.forName("com.mysql.jdbc.Driver");
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
    public List<Class> findAllLevel() {
        List<Class> levels = new ArrayList<>();
        try {
            Connection connection = getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(FIND_ALL_LEVEL);

            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                long idLevel = resultSet.getLong("id");
                String nameLevel = resultSet.getString("name");

                Class level = new Class(idLevel, nameLevel);
                levels.add(level);
            }

            System.out.println("findAllLevel():" + preparedStatement);
            connection.close();
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
        return levels;
    }

    @Override
    public Class findLevelById(long idLevel) {
        try {
            Connection connection = getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(FIND_LEVEL_BY_ID);
            preparedStatement.setLong(1,idLevel);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                long id = resultSet.getLong("id");
                String nameLevel = resultSet.getString("name");

                Class level = new Class(id, nameLevel);
                return level;
            }
            System.out.println("findLevelById: " + preparedStatement);
            connection.close();
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
        return null;
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
}
