package com.example.dethmodule2.view;

import com.example.dethmodule2.model.Student;
import com.example.dethmodule2.service.StudentService;
import com.example.dethmodule2.utils.AppUtils;

import java.util.List;
import java.util.Scanner;

public class StudentView {
    public static List<Student> students;
    private static StudentService studentService = new StudentService();
    private static final Scanner input = new Scanner(System.in);

    public void showStudent() {

    }

    public static void addStudent() {
        boolean flag = true;
        do {
            System.out.println("---- Thêm sinh viên ----");
            Long idStudent = System.currentTimeMillis() / 1000;
            String fullName = inputName(Status.ADD);
            Integer age = inputAge(Status.ADD);
            String gender = inputGender(Status.ADD);
            String address = inputAddress(Status.ADD);
            Double mediumScore = inputMediumScore(Status.ADD);
            Student student = new Student(idStudent, fullName, age, gender, address, mediumScore);
            studentService.addStudent(student);
            System.out.println("Thêm sinh viên thành công");

        }
    }




    public static String inputName(Status status) {
        String name;
        switch (status) {
            case ADD:
                System.out.println("Nhập tên sinh viên: ");
                break;
            case EDIT:
                System.out.println("Nhập tên sinh viên muốn sửa: ");
                break;
        }
        System.out.print("==> ");
        boolean flag = true;
        do {
            name = input.nextLine().trim();
            boolean exist = (!name.isEmpty());
            switch (status) {
                case ADD:
                case EDIT:
                    if (!exist) {
                        System.out.println("Bạn nhập sai định dạng, vui lòng nhập lại: ");
                        System.out.print("==> ");
                    }
                    flag = !exist;
                    break;
            }
        } while (flag);
        return name;
    }

    public static Integer inputAge(Status status) {
        Integer age;
        switch (status) {
            case ADD:
                System.out.println("Nhập tuổi sinh vieen: ");
                break;
            case EDIT:
                System.out.println("Nhập tuổi sinh viên cần sửa: ");
                break;
        }
        System.out.print("==> ");
        boolean flag = true;
        do {
            age = AppUtils.retryParseInt();
            boolean exist = (age >= 18 && age <= 35); // sinh viên phải trên 18 tuổi
            switch (status) {
                case ADD:
                case EDIT:
                case REMOVE:
                    if (!exist) {
                        System.out.println("Nhập sai (tuổi sinh viên phải nằm trong khỏoảng 18-35)");
                        System.out.print("==> ");
                    }
                    flag = !exist;
                    break;
            }
        } while (flag);
        return age;
    }

    private static Double inputMediumScore(Status status) {
        double mediumScore;
        switch (status) {
            case ADD:
                System.out.println("Nhập điểm trung bình sinh viên: ");
                break;
            case EDIT:
                System.out.println("Nhập điểm TB sinh viên cần sửa: ");
                break;
        }
        System.out.print("==> ");
        boolean flag = true;
        do {
            mediumScore = AppUtils.retryParseDouble();
            boolean exist = (mediumScore > 0 && mediumScore <= 10);
            switch (status) {
                case ADD:
                case EDIT:
                case REMOVE:
                    if (!exist) {
                        System.out.println("Bạn nhập sai định dạng (Điểm TB phải lớn hơn 0 và bé hơn hoăc bằng 10 )");
                        System.out.print("==> ");
                    }
                    flag = !exist;
                    break;
            }
        } while (flag);
        return mediumScore;
    }

    public static String inputGender(Status status) {
        String gender;
        switch (status) {
            case ADD:
                System.out.println("Nhập giới tính sinh viên: ");
                break;
            case EDIT:
                System.out.println("Nhập giới tính sinh vien muốn sửa: ");
                break;
        }
        System.out.println("==> ");
        boolean flag = true;
        do {
            gender = input.nextLine().trim();
            boolean exist = (!gender.isEmpty());
            switch (status) {
                case ADD:
                case EDIT:
                    if (!exist) {
                        System.out.println("Bạn nhập sai định dạng, vui lòng nhạp lại: ");
                        System.out.print("==> ");
                    }
                    flag = !exist;
                    break;
            }
        } while (flag);
        return gender;
    }


    public static String inputAddress(Status status) {
        String address;
        switch (status) {
            case ADD:
                System.out.println("Nhập địa chỉ sinh viên: ");
                break;
            case EDIT:
                System.out.println("Nhập địa chỉ sinh viên muốn sửa: ");
                break;
        }
        System.out.println("==> ");
        boolean flag = true;
        do {
            address = input.nextLine().trim();
            boolean exist = (!address.isEmpty());
            switch (status) {
                case ADD:
                case EDIT:
                    if (!exist) {
                        System.out.println("Bạn nhập sai định dạng, vui lòng nhạp lại: ");
                        System.out.print("==> ");
                    }
                    flag = !exist;
                    break;
            }
        } while (flag);
        return address;
    }
}
