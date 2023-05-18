package com.example.casestudymodule3.utils;

import java.util.regex.Pattern;

public class ValidateUtils {
    public static final String NAME_REGEX = "^[\\p{L}\\p{M}\\s',.-]{5,20}$";
    public static final String EMAIL_REGEX = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}$";
    private static final String DESCRIPTION_REGEX = "^[\\p{L}\\p{M}\\s',.-]{15,50}$";

    public static boolean isNameValid(String name) {
        return Pattern.matches(NAME_REGEX, name);
    }
    public static boolean isDescriptionValid(String description) {
        return Pattern.matches(DESCRIPTION_REGEX, description);
    }
    public static boolean isEmailValid(String email) {
        return Pattern.matches(EMAIL_REGEX, email);
    }

}
