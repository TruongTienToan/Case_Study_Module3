package com.example.btanhquang;

public class Bai2 {
    public static void main(String[] args) {
        int[] arr = {11,20,34,45,55,69,37};
        int n = 0;
        System.out.println("Các vị trí mà giá trị tại đó là số nguyên tố là");
        for (int i = 0; i < arr.length; i++) {
            boolean isPrime = true;
            if (arr[i] <= 1) {
                isPrime = false;
            }
            for (int j = 2; j <= Math.sqrt(arr[i]); j++) {
                if (arr[i] % j == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                System.out.println(i + "");
            }
        }
    }
}
