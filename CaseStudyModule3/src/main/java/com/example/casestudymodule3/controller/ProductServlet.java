package com.example.casestudymodule3.controller;

import com.example.casestudymodule3.connection.DBContext;
import com.example.casestudymodule3.model.Category;
import com.example.casestudymodule3.model.Product;
import com.example.casestudymodule3.service.CategoryService;
import com.example.casestudymodule3.service.ProductService;
import com.example.casestudymodule3.utils.ValidateUtils;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "ProductServlet", value = "/product")
public class ProductServlet extends HttpServlet {
    private ProductService productService;
    private CategoryService categoryService;

    @Override
    public void init() throws ServletException {
        productService = new ProductService();
        categoryService = new CategoryService();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");

        String action = request.getParameter("action");
        if (action == null) {
            action = "";
        }
        switch (action) {
            case "add":
                showAddProduct(request, response);
                break;
            case "edit":
                showEditProduct(request, response);
                break;
            default:
                showProduct(request, response);
        }
    }

    private void showEditProduct(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        long idProduct = Long.parseLong(request.getParameter("idproduct"));
        Product product = productService.findProductById(idProduct);


        request.setAttribute("product", product);
        request.setAttribute("category", categoryService.findAllCategory());
        RequestDispatcher requestDispatcher = request.getRequestDispatcher("/WEB-INF/product/edit.jsp");
        requestDispatcher.forward(request, response);
    }

    private void
    showProduct(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String kw = "";
        if (request.getParameter("kw") != null) {
            kw = request.getParameter("kw");
        }
        long idcategpory = -1;
        if (request.getParameter("kw") != null) {
            idcategpory = Long.parseLong(request.getParameter("idcategory"));
        }
        int page = 1;
        if (request.getParameter("page") != null) {
            page = Integer.parseInt(request.getParameter("page"));
        }
        int limit = 3;
        if (request.getParameter("limit") != null) {
            limit = Integer.parseInt(request.getParameter("limit"));
        }

        List<Product> products = productService.findAllProductPagging(kw, idcategpory, (page - 1) * limit, limit);
        List<Category> categories = categoryService.findAllCategory();

        // lấy tổng số trang
        int noOfRecords = productService.getNoOfRecords();
        int noOfPages = (int) Math.ceil(noOfRecords * 1.0 / limit);     // hàm ceil làm tròn lên: 10/3 = 3,33 => làm tròn 4

        request.setAttribute("products", products);
        request.setAttribute("categories", categories);

        request.setAttribute("kw", kw);
        request.setAttribute("idcategory", idcategpory);
        request.setAttribute("currentPage", page);
        request.setAttribute("limit", limit);
        request.setAttribute("noOfPages", noOfPages);

        RequestDispatcher requestDispatcher = request.getRequestDispatcher("/WEB-INF/product/product.jsp");
        requestDispatcher.forward(request, response);
    }

    private void showAddProduct(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //List<Customer> customers = customerService.findAllCustomers();
        List<Category> categories = categoryService.findAllCategory();

        //request.setAttribute("customers", customers);
        request.setAttribute("categories", categories);
        RequestDispatcher requestDispatcher = request.getRequestDispatcher("/WEB-INF/product/create.jsp");
        requestDispatcher.forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        String action = request.getParameter("action");
        if (action == null) {
            action = "";
        }
        switch (action) {
            case "add":
                addProduct(request, response);
                break;
            case "edit":
                editProduct(request, response);
                break;
            case "delete":
                deleteProduct(request, response);
                break;
            default:
                break;
        }
    }

    private void addProduct(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<String> errors = new ArrayList<>();
        Product product = new Product();

        validateName(product, errors, request);
        validatePrice(product, errors, request);
        validateQuantity(product, errors, request);
        validateDescription(product, errors, request);
        validateCategory(product, errors, request);
        String image = request.getParameter("image");
        product.setImage(image);

        if (!errors.isEmpty()) {
            request.setAttribute("product", product);
            request.setAttribute("errors", errors);
            request.setAttribute("categories", categoryService.findAllCategory());
            RequestDispatcher requestDispatcher = request.getRequestDispatcher("/WEB-INF/product/create.jsp");
            requestDispatcher.forward(request, response);
        } else {
            request.setAttribute("message", "Thêm thành công");
            productService.addProduct(product);
            response.sendRedirect("/product?message=success");
        }
    }

    private void editProduct(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {


        long idproduct = Long.parseLong(req.getParameter("idproduct"));
        Product product = productService.findProductById(idproduct);
        List<String> errors = new ArrayList<>();

        validateName(product, errors, req);
        validatePrice(product, errors, req);
        validateQuantity(product, errors, req);
        validateDescription(product, errors, req);
        validateCategory(product, errors, req);
        String image = req.getParameter("image");
        product.setImage(image);

        if (!errors.isEmpty()) {
            req.setAttribute("product", product);
            req.setAttribute("errors", errors);
            req.setAttribute("category", categoryService.findAllCategory());
            RequestDispatcher requestDispatcher = req.getRequestDispatcher("/WEB-INF/product/edit.jsp");
            requestDispatcher.forward(req, resp);
        } else {
            productService.updateProduct(idproduct, product);
            resp.sendRedirect("/product?message=success");
        }
    }

    private void deleteProduct(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        long idproduct = Long.parseLong(req.getParameter("idproduct"));
        productService.deleteProduct(idproduct);
        resp.sendRedirect("/product");
    }

    private void validateName(Product product, List<String> errors, HttpServletRequest request) {
        String name = request.getParameter("name");
        if (!ValidateUtils.isNameValid(name)) {
            errors.add("Tên không hợp lệ. Phải bắt đầu là chữ và từ 8-20 kí tự");
        }
        product.setName(name);
    }

    private void validatePrice(Product product, List<String> errors, HttpServletRequest request) {
        try {
            float price = Float.parseFloat(request.getParameter("price"));
            if (price < 0 || price > 10000000) {
                errors.add("Giá phải lớn hơn 0 và nhỏ hơn 10000000");
            } else {
                product.setPrice(price);
            }
        } catch (NumberFormatException numberFormatException) {
            errors.add("Định dạng giá không hop lệ");
        }
    }

    private void validateQuantity(Product product, List<String> errors, HttpServletRequest request) {
        try {
            long quantity = Long.parseLong(request.getParameter("quantity"));
            if (quantity < 0 || quantity > 500) {
                errors.add("Số lượng phải lớn hơn 0 và nhỏ hơn 500");
            } else {
                product.setQuantity(quantity);
            }
        } catch (NumberFormatException numberFormatException) {
            errors.add("Định dạng số lượng không hop lệ");
        }
    }

    private void validateDescription(Product product, List<String> errors, HttpServletRequest request) {
        String description = request.getParameter("description");
        if (!ValidateUtils.isDescriptionValid(description)) {
            errors.add("Mô tả không hợp lệ. Phải có từ 15-50 kí tự!");
        }
        product.setDescription(description);
    }


    private void validateCategory(Product product, List<String> errors, HttpServletRequest request) {
        try {
            long idcategory = Long.parseLong(request.getParameter("category"));
            Category c = categoryService.findCategoryById(idcategory);
            if (c == null) {
                errors.add("Danh mục sản phẩm không hợp lệ");
            } else {
                product.setIdcategory(idcategory);
            }

        } catch (NumberFormatException numberFormatException) {
            errors.add("Danh mục sản phẩm không hợp lệ");
        }
    }
}

