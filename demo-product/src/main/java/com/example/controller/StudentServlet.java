package com.example.controller;

import com.example.model.Student;
import com.example.model.Class;
import com.example.service.StudentServiceImpl;
import com.example.service.IStudentService;
import com.example.service.IClassService;
import com.example.service.ClassServiceImpl;
import com.example.utils.ValidateUtils;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "CustomerServlet", urlPatterns = "/student")
public class StudentServlet extends HttpServlet {
    private IStudentService customerService;
    private IClassService levelService;

    @Override
    public void init() throws ServletException {
        customerService = new StudentServiceImpl();
        levelService = new ClassServiceImpl();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");
        if (action == null) {
            action = "";
        }
        switch (action) {
            case "add":
                showAddCustomer(request, response);
                break;
            case "edit":
                showEditCustomer(request,response);
                break;
            default:
                showCustomer(request, response);
        }
    }

    private void showEditCustomer(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        long idCustomer = Long.parseLong(request.getParameter("id"));
        Student customer = customerService.findCustomerById(idCustomer);



        request.setAttribute("customers", customer);
        request.setAttribute("levels", levelService.findAllLevel());
        RequestDispatcher requestDispatcher = request.getRequestDispatcher("/WEB-INF/customer/edit.jsp");
        requestDispatcher.forward(request, response);
    }

    private void showCustomer(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String kw = "";
        if (request.getParameter("kw") != null) {
            kw = request.getParameter("kw");
        }
        long idLevel = -1;
        if (request.getParameter("kw") != null) {
            idLevel = Long.parseLong(request.getParameter("idLevel"));
        }
        int page = 1;
        if (request.getParameter("page") != null) {
            page = Integer.parseInt(request.getParameter("page"));
        }
        int limit = 3;
        if (request.getParameter("limit") != null) {
            limit = Integer.parseInt(request.getParameter("limit"));
        }

        List<Student> customers = customerService.findAllCustomerPagging(kw, idLevel, (page - 1) * limit, limit);
        List<Class> levels = levelService.findAllLevel();

        // lấy tổng số trang
        int noOfRecords = customerService.getNoOfRecords();
        int noOfPages = (int) Math.ceil(noOfRecords * 1.0 / limit);     // hàm ceil làm tròn lên: 10/3 = 3,33 => làm tròn 4

        request.setAttribute("customers", customers);
        request.setAttribute("levels", levels);

        request.setAttribute("kw", kw);
        request.setAttribute("idLevel", idLevel);
        request.setAttribute("currentPage", page);
        request.setAttribute("limit", limit);
        request.setAttribute("noOfPages", noOfPages);

        RequestDispatcher requestDispatcher = request.getRequestDispatcher("/WEB-INF/customer/customer.jsp");
        requestDispatcher.forward(request, response);

    }

    private void showAddCustomer(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //List<Customer> customers = customerService.findAllCustomers();
        List<Class> levels = levelService.findAllLevel();

        //request.setAttribute("customers", customers);
        request.setAttribute("levels", levels);
        RequestDispatcher requestDispatcher = request.getRequestDispatcher("/WEB-INF/customer/create.jsp");
        requestDispatcher.forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");
        if (action == null) {
            action = "";
        }
        switch (action) {
            case "add":
                addCustomer(request, response);
                break;
            case "edit":
                editCustomer(request, response);
                break;
            case "delete":
                deleteCustomer(request, response);
                break;
            default:
                break;
        }
    }

    private void addCustomer(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<String> errors = new ArrayList<>();
        Student customer = new Student();

        validateName(customer, errors, request);
        validateDate(customer, errors, request);
        validateEmail(customer, errors, request);
        validateAddress(customer, errors, request);
        validatePhone(customer, errors, request);
        validateLevel(customer, errors, request);

        if (!errors.isEmpty()) {
            request.setAttribute("customer", customer);
            request.setAttribute("errors", errors);
            request.setAttribute("levels", levelService.findAllLevel());
            RequestDispatcher requestDispatcher = request.getRequestDispatcher("/WEB-INF/customer/create.jsp");
            requestDispatcher.forward(request,response);
        } else {
            request.setAttribute("message", "Thêm thành công");
            customerService.addCustomer(customer);
            response.sendRedirect("/student?message=success");
        }

    }

    private void editCustomer(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        long idCustomer = Long.parseLong(req.getParameter("id"));
        Student customer1 = customerService.findCustomerById(idCustomer);
        List<String> errors = new ArrayList<>();

        validateName(customer1 ,errors, req);
        validateEmail(customer1, errors, req);
        validateAddress(customer1, errors, req);
        validateLevel(customer1, errors, req);
        validateDate(customer1, errors, req);
        validatePhone(customer1, errors, req);

        if (!errors.isEmpty()) {
            req.setAttribute("customer1", customer1);
            req.setAttribute("errors", errors);
            req.setAttribute("levels", levelService.findAllLevel());
            RequestDispatcher requestDispatcher = req.getRequestDispatcher("/WEB-INF/customer/edit.jsp");
            requestDispatcher.forward(req, resp);
        } else {
            customerService.updateCustomer(idCustomer, customer1);
            resp.sendRedirect("/student?message=success");
        }
    }

    private void deleteCustomer(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        long idCustomer = Long.parseLong(req.getParameter("id"));
        customerService.deleteCustomer(idCustomer);
        resp.sendRedirect("/student");
    }


    private void validateName(Student customer, List<String> errors, HttpServletRequest request) {
        String name = request.getParameter("txtName");
        if (!ValidateUtils.isNameValid(name)) {
            errors.add("Tên không hợp lệ. Phải bắt đầu là chữ và từ 8-20 kí tự");
        }
        customer.setName(name);
    }

    private void validateEmail(Student customer, List<String> erros, HttpServletRequest request) {
        String email = request.getParameter("txtEmail");
        if (!ValidateUtils.isEmailValid(email)) {
            erros.add("Email có định dạng không hợp lệ");
        }
        customer.setEmail(email);
    }

    private void validateAddress(Student customer, List<String> erros, HttpServletRequest request) {
        String address = request.getParameter("txtAddress");
        if (!ValidateUtils.isAddressValid(address)) {
            erros.add("Địa chỉ bao gồm 5-50 kí tự");
        }
        customer.setAddress(address);
    }

    private void validateLevel(Student customer, List<String> erros, HttpServletRequest request) {
        try {
            long idLevel = Long.parseLong(request.getParameter("sLevel"));
            Class level = levelService.findLevelById(idLevel);
            if (level == null) {
                erros.add("Hạng khách hàng không có trong database");
            } else {
                customer.setLevel(idLevel);
            }
        } catch (NumberFormatException numberFormatException) {
            erros.add("Loại khách hàng không hợp lệ");
        }
    }

    private void validateDate(Student customer, List<String> erros, HttpServletRequest request) {
        String dateOfBirth = request.getParameter("txtDateOfBirth");
        if (!ValidateUtils.isDateValid(dateOfBirth)) {
            erros.add("Năm sinh chỉ được nằm trong khoảng 1980-2008(15+)");
        }
        customer.setDateOfBirth(Date.valueOf(dateOfBirth));
    }

    private void validatePhone(Student customer, List<String> erros, HttpServletRequest request) {
        String phone = request.getParameter("txtPhone");
        if (!ValidateUtils.isPhoneValid(phone)) {
            erros.add("Số điện thoại chỉ được chứa 10-11 số và bắt đầu bằng số 0");
        }
        customer.setPhone(Long.parseLong(phone));
    }
}
