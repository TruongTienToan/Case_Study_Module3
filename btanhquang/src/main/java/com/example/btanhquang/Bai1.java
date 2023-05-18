package com.example.btanhquang;

import java.sql.Array;

public class Bai1 {
    public static void main(String[] args) {
        int[] arr = {11,20,34,45,55,69,37};
        System.out.println("Các giá trị có toàn chữ số lẻ trong mảng là: ");
        for (int i = 0; i < arr.length; i++) {
            int num = arr[i];
            boolean allOdd = true;
            while (num > 0) {
                int digit = num % 10;
                if (digit % 2 == 0) {
                    allOdd = false;
                    break;
                }
                num /= 10;
            }
            if (allOdd) {
                System.out.println(arr[i] + "");
            }
        }
    }
}
