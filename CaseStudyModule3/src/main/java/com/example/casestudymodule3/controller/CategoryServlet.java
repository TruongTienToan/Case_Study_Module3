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

@WebServlet(name = "CategoryServlet", value = "/category")
public class CategoryServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");

        int idcategory = Integer.parseInt(request.getParameter("idcategory"));
        ProductService productService = new ProductService();
        CategoryService categoryService = new CategoryService();
        //cái chỗ này nè em phải viết 1 câu query để lấy về list sản phẩm theo category thì mới đúng
        // chơ xài cái hàm findProductById này nó sai cái nghiệp vụ e đang làm màn hình á
        List<Product> list = productService.getProductByIdCategory(idcategory);
        List<Category> listCategory = categoryService.findAllCategory();
        Product lastProduct = productService.getLast();

        // request.setttribute("lastP",lastProduct);
        request.setAttribute("category", listCategory);
        request.setAttribute("product", list);


        request.getRequestDispatcher("/WEB-INF/home.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
