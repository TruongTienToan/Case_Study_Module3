package com.example.utils;

import java.util.regex.Pattern;

public class ValidateUtils {
    public static final String NAME_REGEX = "^[A-Za-z][A-Za-z0-9_ ]{7,19}$";
    public static final String EMAIL_REGEX = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}$";
    public static final String ADDRESS_REGEX = "^[a-zA-Z0-9\\s]{5,50}$";
    public static final String DATE_REGEX = "^(198\\d|199\\d|200\\d|200[0-8])-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$";
    public static final String PHONE_REGEX =  "^0[0-9]{9,10}$";
    public static boolean isNameValid(String name) {
        return Pattern.matches(NAME_REGEX, name);
    }
    public static boolean isEmailValid(String email) {
        return Pattern.matches(EMAIL_REGEX, email);
    }

    public static boolean isAddressValid(String address) {
        return Pattern.matches(ADDRESS_REGEX, address);
    }

    public static boolean isDateValid(String date) {
        return Pattern.matches(DATE_REGEX, date);
    }
    public static boolean isPhoneValid(String phone) {
        return Pattern.matches(PHONE_REGEX, phone);
    }
}
