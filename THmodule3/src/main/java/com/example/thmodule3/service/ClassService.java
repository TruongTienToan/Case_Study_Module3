package com.example.thmodule3.service;

import com.example.thmodule3.connection.DBContext;
import com.example.thmodule3.model.Class;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ClassService extends DBContext {
    private static final String FIND_ALL_CLASS = "SELECT * FROM classroom;";
    private static final String FIND_CLASS_BY_ID = "SELECT * FROM classroom where idClass = ?";

    public List<Class> findAllClass() {
        List<Class> classes = new ArrayList<>();
        try {
            Connection connection = getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(FIND_ALL_CLASS);

            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                int idClass = resultSet.getInt("idClass");
                String name = resultSet.getString("name");

                Class aClass = new Class(idClass, name);
                classes.add(aClass);
            }

            System.out.println("findAllLevel():" + preparedStatement);
            connection.close();
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
        return classes;
    }


    public Class findClassById(long idClass) {
        try {
            Connection connection = getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(FIND_CLASS_BY_ID);
            preparedStatement.setLong(1,idClass);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                int id = resultSet.getInt("idClass");
                String name = resultSet.getString("name");

                Class aClass = new Class(id, name);
                return aClass;
            }
            System.out.println("findLevelById: " + preparedStatement);
            connection.close();
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
        return null;
    }


}
