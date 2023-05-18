package com.example.casestudymodule3.service;

import com.example.casestudymodule3.connection.DBContext;
import com.example.casestudymodule3.model.Category;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class CategoryService extends DBContext {
    private static final String FIND_ALL_CATEGORY = "SELECT * FROM category;";
    private static final String FIND_CATEGORY_BY_ID = "SELECT * FROM category where idcategory = ?";

    public List<Category> findAllCategory() {
        List<Category> categories = new ArrayList<>();
        try {
            Connection connection = getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(FIND_ALL_CATEGORY);

            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                long idcategory = resultSet.getLong("idcategory");
                String name = resultSet.getString("name");

                Category category = new Category(idcategory, name);
                categories.add(category);
            }

            System.out.println("findAllCategory():" + preparedStatement);
            connection.close();
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
        return categories;
    }

    public Category findCategoryById(long idcategory) {
        try {
            Connection connection = getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(FIND_CATEGORY_BY_ID);
            preparedStatement.setLong(1,idcategory);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                long idCategory = resultSet.getLong("idcategory");
                String name = resultSet.getString("name");

                Category category = new Category(idCategory, name);
                return category;
            }
            System.out.println("findCategoryById: " + preparedStatement);
            connection.close();
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
        return null;
    }
}
