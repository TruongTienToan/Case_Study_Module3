package com.example.thmodule3.controller;

import com.example.thmodule3.model.Class;
import com.example.thmodule3.model.Student;
import com.example.thmodule3.service.ClassService;
import com.example.thmodule3.service.StudentService;
import com.example.thmodule3.utils.ValidateUtils;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "StudentServlet", value = "/customer")
public class StudentServlet extends HttpServlet {
    private StudentService studentService;
    private ClassService classService;
    @Override
    public void init() throws ServletException {
        studentService = new StudentService();
        classService = new ClassService();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");
        if (action == null) {
            action = "";
        }
        switch (action) {
            case "add":
                showAddStudent(request, response);
                break;
            case "edit":
                showEditStudent(request,response);
                break;
            default:
                showStudent(request, response);
        }
    }

    private void showEditStudent(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        long idStudent = Long.parseLong(request.getParameter("id"));
        Student student = studentService.findStudentById(idStudent);



        request.setAttribute("customers", student);
        request.setAttribute("levels", classService.findAllClass());
        RequestDispatcher requestDispatcher = request.getRequestDispatcher("/WEB-INF/customer/edit.jsp");
        requestDispatcher.forward(request, response);
    }

    private void showStudent(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
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

        List<Student> students = studentService.findAllStudentPagging(kw, idLevel, (page - 1) * limit, limit);
        List<Class> classes = classService.findAllClass();

        // lấy tổng số trang
        int noOfRecords = studentService.getNoOfRecords();
        int noOfPages = (int) Math.ceil(noOfRecords * 1.0 / limit);     // hàm ceil làm tròn lên: 10/3 = 3,33 => làm tròn 4

        request.setAttribute("customers", students);
        request.setAttribute("levels", classes);

        request.setAttribute("kw", kw);
        request.setAttribute("idLevel", idLevel);
        request.setAttribute("currentPage", page);
        request.setAttribute("limit", limit);
        request.setAttribute("noOfPages", noOfPages);

        RequestDispatcher requestDispatcher = request.getRequestDispatcher("/WEB-INF/customer/customer.jsp");
        requestDispatcher.forward(request, response);

    }

    private void showAddStudent(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //List<Customer> customers = customerService.findAllCustomers();
        List<Class> classes = classService.findAllClass();

        //request.setAttribute("customers", customers);
        request.setAttribute("levels", classes);
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
                addStudent(request, response);
                break;
            case "edit":
                editStudent(request, response);
                break;
            case "delete":
                deleteCustomer(request, response);
                break;
            default:
                break;
        }
    }

    private void addStudent(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<String> errors = new ArrayList<>();
        Student student = new Student();

        validateName(student, errors, request);
        validateDate(student, errors, request);
        validateEmail(student, errors, request);
        validateAddress(student, errors, request);
        validateLevel(student, errors, request);
        validatePhone(student, errors, request);

        if (!errors.isEmpty()) {
            request.setAttribute("customer", student);
            request.setAttribute("errors", errors);
            request.setAttribute("levels", classService.findAllClass());
            RequestDispatcher requestDispatcher = request.getRequestDispatcher("/WEB-INF/customer/create.jsp");
            requestDispatcher.forward(request,response);
        } else {
            request.setAttribute("message", "Thêm thành công");
            studentService.addStudent(student);
            response.sendRedirect("/customer?message=success");
        }

    }

    private void editStudent(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        long idStudent = Long.parseLong(req.getParameter("id"));
        Student student = studentService.findStudentById(idStudent);
        List<String> errors = new ArrayList<>();

        validateName(student, errors, req);
        validateEmail(student, errors, req);
        validateAddress(student, errors, req);
        validateLevel(student, errors, req);
        validateDate(student, errors, req);

        if (!errors.isEmpty()) {
            req.setAttribute("customer", student);
            req.setAttribute("errors", errors);
            req.setAttribute("levels", classService.findAllClass());
            RequestDispatcher requestDispatcher = req.getRequestDispatcher("/WEB-INF/customer/edit.jsp");
            requestDispatcher.forward(req, resp);
        } else {
            studentService.updateStudent(idStudent, student);
            resp.sendRedirect("/customer?message=success");
        }
    }

    private void deleteCustomer(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        long idStudent = Long.parseLong(req.getParameter("id"));
        studentService.deleteStudent(idStudent);
        resp.sendRedirect("/customer");
    }


    private void validateName(Student student, List<String> errors, HttpServletRequest request) {
        String name = request.getParameter("txtName");
        if (!ValidateUtils.isNameValid(name)) {
            errors.add("Tên không hợp lệ. Phải bắt đầu là chữ và từ 8-20 kí tự");
        }
        student.setName(name);
    }

    private void validateEmail(Student student, List<String> erros, HttpServletRequest request) {
        String email = request.getParameter("txtEmail");
        if (!ValidateUtils.isEmailValid(email)) {
            erros.add("Email có định dạng không hợp lệ");
        }
        student.setEmail(email);
    }

    private void validateAddress(Student student, List<String> erros, HttpServletRequest request) {
        String address = request.getParameter("txtAddress");
        if (!ValidateUtils.isAddressValid(address)) {
            erros.add("Địa chỉ bao gồm 5-50 kí tự");
        }
        student.setAddress(address);
    }

    private void validateLevel(Student student, List<String> erros, HttpServletRequest request) {
        try {
            int idClass = Integer.parseInt(request.getParameter("sLevel"));
            Class aClass = classService.findClassById(idClass);
            if (aClass == null) {
                erros.add("Class không có trong database");
            } else {
                student.setIdClass(idClass);
            }
        } catch (NumberFormatException numberFormatException) {
            erros.add("Loại Class không hợp lệ");
        }
    }

    private void validateDate(Student student, List<String> erros, HttpServletRequest request) {
        String dateOfBirth = request.getParameter("txtDateOfBirth");
        if (!ValidateUtils.isDateValid(dateOfBirth)) {
            erros.add("Năm sinh chỉ được nằm trong khoảng 1980-2008(15+)");
        }
        student.setDate_of_birth(Date.valueOf(dateOfBirth));
    }

    private void validatePhone(Student student, List<String> erros, HttpServletRequest request) {
        String phone_number = request.getParameter("txtPhoneNumber");
        if (!ValidateUtils.isPhoneValid(phone_number)) {
            erros.add("Số điện thoại chỉ được chứa 10-11 số và bắt đầu bằng số 0");
        }
        student.setPhone_number(Long.parseLong(phone_number));
    }
}
