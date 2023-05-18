package com.example.casestudymodule3.controller;

import com.example.casestudymodule3.model.Category;
import com.example.casestudymodule3.service.CategoryService;
import com.example.casestudymodule3.service.ProductService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "HomeServlet", value = "/home")
public class HomeServlet extends HttpServlet {
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
        request.setAttribute("product", productService.findAllProduct());
        List<Category> listCategory = categoryService.findAllCategory();
        request.setAttribute("category",listCategory);
        RequestDispatcher requestDispatcher = request.getRequestDispatcher("/WEB-INF/home.jsp");
        requestDispatcher.forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
    }


}
