package com.example.dethmodule2.utils;

import java.text.DecimalFormat;
import java.util.Scanner;

public class AppUtils {
    static Scanner scanner = new Scanner(System.in);

    public static int retryChoice(int min, int max) {
        int choice;
        do {
            try {
                choice = Integer.parseInt(scanner.nextLine());
                if (choice > max || choice < min) {
                    System.out.println("Vui lòng chọn lại chức năng");
                    System.out.print("==> ");
                    continue;
                }
                break;
            } catch (Exception e) {
                System.out.println("Nhập sai vui lòng nhập lại");
                System.out.print("==> ");
            }
        } while (true);
        return choice;
    }

    public static double retryParseDouble() {
        Double result;
        do {
            try {
                result = Double.parseDouble(scanner.nextLine());
                return result;
            } catch (Exception e) {
                System.out.println("Nhập sai vui lòng nhập lại: ");
                System.out.print("==> ");
            }
        } while (true);
    }

    public static String retryString(String fieldName) {
        String result;
        System.out.print("==> ");
        while ((result = scanner.nextLine()).isEmpty()) {
            System.out.printf("%s Không được để trống \n", fieldName);
            System.out.print("==> ");
        }
        return result;
    }

    public static int retryParseInt() {
        int result;
        do {
            try {
                result = Integer.parseInt(scanner.nextLine());
                return result;
            } catch (Exception e) {
                System.out.println("Nhập sai vui lòng nhạp lại");
                System.out.print("==> ");
            }
        } while (true);
    }

    public static Long retryParseLong() {
        Long result;
        do {
            try {
                result = Long.parseLong(scanner.nextLine());
                return result;
            } catch (Exception e) {
                System.out.println("Nhập sai vui lòng nhập lại");
                System.out.print("==> ");
            }
        } while (true);
    }

    public static String doubleToVND(double value) {
        String patternVND = ",###VND";
        DecimalFormat decimalFormat = new DecimalFormat(patternVND);
        return decimalFormat.format(value);
    }

    public static void exit() {
        System.out.println("TẠM BIỆT");
        System.exit(3);
    }
}
