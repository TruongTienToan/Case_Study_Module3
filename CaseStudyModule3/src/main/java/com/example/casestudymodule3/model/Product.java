package com.example.casestudymodule3.model;

public class Product {
    private long idproduct;
    private String name;
    private double price;
    private String image;
    private long quantity;
    private String description;
    private long idcategory;


    public Product() {
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Product(long idproduct, String name, double price, String image, long quantity, String description, long idcategory) {
        this.idproduct = idproduct;
        this.name = name;
        this.price = price;
        this.image = image;
        this.quantity = quantity;
        this.description = description;
        this.idcategory = idcategory;
    }

    public long getIdproduct() {
        return idproduct;
    }

    public void setIdproduct(long idproduct) {
        this.idproduct = idproduct;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public long getQuantity() {
        return quantity;
    }

    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getIdcategory() {
        return idcategory;
    }

    public void setIdcategory(long idcategory) {
        this.idcategory = idcategory;
    }
}
