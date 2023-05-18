package com.example.casestudymodule3.service;

import com.example.casestudymodule3.connection.DBContext;
import com.example.casestudymodule3.model.Product;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductService extends DBContext {
    private static final String FIND_ALL_PRODUCT = "SELECT * FROM product";
    private static final String FIND_PRODUC_BY_ID = "SELECT * FROM product where idproduct = ?;";
    private static final String ADD_PRODUCT = "INSERT INTO `product` (`name`, `price`, `quantity`, `description`, `idcategory`, `image`) VALUES (?, ?, ?, ?, ?, ?)";
    private static final String UPDATE_PRODUCT = " UPDATE `product` SET `name` = ?, `price` = ?, `quantity` = ?, `description` = ?, `idcategory` = ?, `image` = ? WHERE (`idproduct` = ?);";
    private static final String DELETE_PRODUCT = "DELETE FROM `product` WHERE (`idproduct` = ?);";

    private static final String SELECT_PRODUCT_PAGGING = "SELECT SQL_CALC_FOUND_ROWS * FROM product where `name` like ? or `description` like ?  limit ?, ?";
    private static final String SELECT_PRODUCT_CATEGORY_PAGGING = "SELECT SQL_CALC_FOUND_ROWS * FROM product where `name` like ? or `description` like ? and idcategory = ? limit ?, ?;";

    private int noOfRecords;
    Connection connection;
    PreparedStatement ps;
    ResultSet rs;

    public List<Product> findAllProduct() {
        List<Product> products = new ArrayList<>();
        try {
            Connection connection = getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(FIND_ALL_PRODUCT);

            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                long idproduct = resultSet.getLong("idproduct");
                String name = resultSet.getString("name");
                Double price = resultSet.getDouble("price");
                Long quantity = resultSet.getLong("quantity");
                String description = resultSet.getString("description");
                Long idcategory = resultSet.getLong("idcategory");
                String image = resultSet.getString("image");

                Product product = new Product(idproduct, name, price, image, quantity, description, idcategory);
                products.add(product);
            }

            System.out.println("findAllProduct: " + preparedStatement);
            connection.close();

        } catch (SQLException sqlException) {
            printSQLException(sqlException);
        }
        return products;
    }

    public Product findProductById(long idproduct) {
        Connection connection = getConnection();
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(FIND_PRODUC_BY_ID);
            preparedStatement.setLong(1, idproduct);

            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                // Luôn lấy theo column label
                Product product = getProductFromResultSet(resultSet);
                return product;
            }
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
        return null;
    }

    private Product getProductFromResultSet(ResultSet resultSet) throws SQLException {
        long idproduct = resultSet.getLong("idproduct");
        String name = resultSet.getString("name");
        Double price = resultSet.getDouble("price");
        Long quantity = resultSet.getLong("quantity");
        String description = resultSet.getString("description");
        Long idcategory = resultSet.getLong("idcategory");
        String image = resultSet.getString("image");

        Product product = new Product(idproduct, name, price, image, quantity, description, idcategory);
        return product;
    }

    public void addProduct(Product product) {
        try {
            Connection connection = getConnection();

            PreparedStatement preparedStatement = connection.prepareStatement(ADD_PRODUCT);
            //(`name`, `price`, `quantity`, `description`, `idcategory`, `image`)
            //INSERT INTO `customer` (`name`, `price`, `quantity`, `description`, `idcategory`)
            preparedStatement.setString(1, product.getName());
            preparedStatement.setDouble(2, product.getPrice());
            //preparedStatement.setString(1, product.getImage());
            preparedStatement.setLong(3, product.getQuantity());
            preparedStatement.setString(4, product.getDescription());
            preparedStatement.setLong(5, product.getIdcategory());
            preparedStatement.setString(6, "");
            System.out.println("addProduct: " + preparedStatement);

            preparedStatement.executeUpdate();
            connection.close();
        } catch (SQLException sqlException) {
            printSQLException(sqlException);
        }
    }

    public void updateProduct(long idProduct, Product product) {
        try {
            Connection connection = getConnection();

            PreparedStatement preparedStatement = connection.prepareStatement(UPDATE_PRODUCT);
            preparedStatement.setString(1, product.getName());
            preparedStatement.setDouble(2, product.getPrice());
            preparedStatement.setLong(3, product.getQuantity());
            preparedStatement.setString(4, product.getDescription());
            preparedStatement.setLong(5, product.getIdcategory());
            preparedStatement.setString(6, product.getImage());
            preparedStatement.setLong(7, product.getIdproduct());

            preparedStatement.executeUpdate();
            System.out.println("updateProduct: " + preparedStatement);

            connection.close();
        } catch (SQLException sqlException) {
            printSQLException(sqlException);
        }
    }

    public void deleteProduct(long idproduct) {
        try {
            Connection connection = getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(DELETE_PRODUCT);
            preparedStatement.setLong(1, idproduct);

            preparedStatement.executeUpdate();

            System.out.println("deleteProduct: " + preparedStatement);

        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
    }

    public long maxId() {
        return 0;
    }

    public List<Product> findAllProductPagging(String kw, long idcategory, int offset, int limit) {
        List<Product> products = new ArrayList<>();
        try {
            Connection connection = getConnection();
            PreparedStatement preparedStatement;
            if (idcategory == -1) {
                //"SELECT * FROM customer where `name` like ? limit ?, ?";
                preparedStatement = connection.prepareStatement(SELECT_PRODUCT_PAGGING);
                preparedStatement.setString(1, "%" + kw + "%");
                preparedStatement.setString(2, "%" + kw + "%");
                preparedStatement.setInt(3, offset);
                preparedStatement.setInt(4, limit);
            } else {
                //SELECT * FROM customer where `name` like ? and id_role = ? limit ?, ?;
                preparedStatement = connection.prepareStatement(SELECT_PRODUCT_CATEGORY_PAGGING);
                preparedStatement.setString(1, "%" + kw + "%");
                preparedStatement.setString(2, "%" + kw + "%");
                preparedStatement.setLong(3, idcategory);
                preparedStatement.setInt(4, offset);
                preparedStatement.setInt(5, limit);
            }
            System.out.println("findAllProductPagging" + preparedStatement);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                Product product = getProductInfo(resultSet);
                products.add(product);
            }
            resultSet = preparedStatement.executeQuery("SELECT FOUND_ROWS()");
            while (resultSet.next()) {
                noOfRecords = resultSet.getInt(1);
            }
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
        return products;
    }

    private Product getProductInfo(ResultSet resultSet) throws SQLException {
        long idproduct = resultSet.getLong("idproduct");
        String name = resultSet.getString("name");
        Double price = resultSet.getDouble("price");
        Long quantity = resultSet.getLong("quantity");
        String description = resultSet.getString("description");
        Long idcategory = resultSet.getLong("idcategory");
        String image = resultSet.getString("image");

        Product product = new Product(idproduct, name, price, image, quantity, description, idcategory);
        return product;
    }

    public int getNoOfRecords() {
        return this.noOfRecords;
    }

    public Product getLast() {
        String query = "select * from product\n" +
                "order by idproduct desc \n" +
                "limit 1";
        try {
            connection = DBContext.getConnection();
            ps = connection.prepareStatement(query);
            rs = ps.executeQuery();

            while (rs.next()) {
                long idproduct = rs.getLong("idproduct");
                String name = rs.getString("name");
                double price = rs.getDouble("price");
                long quantity = rs.getLong("quantity");
                String description = rs.getString("description");
                long idcategory = rs.getLong("idcategory");
                String image = rs.getString("image");
                return new Product(idproduct, name, price, image, quantity, description, idcategory);
            }

        } catch (Exception e) {

        }
        return null;
    }

    public List<Product> getProductByIdCategory(int idcategory) {
        List<Product> list = new ArrayList<>();
        String query = "select * from product where idcategory = ? ";
        try {
            connection = DBContext.getConnection();
            ps = connection.prepareStatement(query);
            ps.setLong(1, idcategory);
            rs = ps.executeQuery();
            while (rs.next()) {
                long idproduct = rs.getLong("idproduct");
                String name = rs.getString("name");
                double price = rs.getDouble("price");
                long quantity = rs.getLong("quantity");
                String description = rs.getString("description");
                String image = rs.getString("image");
                list.add(new Product(idproduct, name, price, image, quantity, description, idcategory));
            }
        } catch (Exception e) {

        }
        return list;
    }


    public List<Product> searchByName(String txtSearch) {
        List<Product> list = new ArrayList<>();
        String query = "select * from `product` where `name` like ? or `description` like ?";
        try {
            connection = DBContext.getConnection();
            ps = connection.prepareStatement(query);
            ps.setString(1, "%" + txtSearch + "%");
            ps.setString(2, "%" + txtSearch + "%");
            rs = ps.executeQuery();
            while (rs.next()) {
                long idproduct = rs.getLong("idproduct");
                String name = rs.getString("name");
                double price = rs.getDouble("price");
                long quantity = rs.getLong("quantity");
                String description = rs.getString("description");
                String image = rs.getString("image");
                long idcategory = rs.getLong("idcategory");
                list.add(new Product(idproduct, name, price, image, quantity, description, idcategory));
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return list;
    }
}
