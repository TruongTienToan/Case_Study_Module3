package com.example.casestudymodule3.controller;

import com.example.casestudymodule3.model.Category;
import com.example.casestudymodule3.model.Product;
import com.example.casestudymodule3.service.CategoryService;
import com.example.casestudymodule3.service.ProductService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "ProductDetailServlet", value = "/productdetail")
public class ProductDetailServlet extends HttpServlet {
    public ProductService productService;
    public CategoryService categoryService;

    @Override
    public void init() throws ServletException {
        productService = new ProductService();
        categoryService = new CategoryService();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html; charset=UTF-8");
//        request.setAttribute("productdetail", productService.findAllProduct());
//
//        RequestDispatcher requestDispatcher = request.getRequestDispatcher("/WEB-INF/productdetail.jsp");
//        requestDispatcher.forward(request, response);


        Long idproduct = Long.parseLong(request.getParameter("idproduct"));

        Product product = productService.findProductById(idproduct);
        long idcategory = product.getIdcategory();
        Category productByCategory = categoryService.findCategoryById(idcategory);
        request.setAttribute("ProductData", product);
        request.setAttribute("Category", productByCategory);
        request.getRequestDispatcher("/WEB-INF/productdetail.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");

        Long idproduct = Long.parseLong(request.getParameter("idproduct"));

        Product product = productService.findProductById(idproduct);
        long idcategory = product.getIdcategory();
        Category productByCategory = categoryService.findCategoryById(idcategory);
        request.setAttribute("ProductData", product);
        request.setAttribute("Category", productByCategory);
        request.getRequestDispatcher("/WEB-INF/productdetail.jsp").forward(request, response);
    }
}
