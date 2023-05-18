package com.example.casestudymodule3.controller;

import com.example.casestudymodule3.model.Product;
import com.example.casestudymodule3.service.ProductService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "SearchServlet", value = "/search")
public class SearchServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html; charset=UTF-8");
        String txtSearch = request.getParameter("txt");
        ProductService productService = new ProductService();
        List<Product> list = productService.searchByName(txtSearch);

        request.setAttribute("product", list);
        request.getRequestDispatcher("/WEB-INF/home.jsp").forward(request, response);
    }
}
