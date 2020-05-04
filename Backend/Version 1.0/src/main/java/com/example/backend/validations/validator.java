package com.example.backend.validations;

import java.util.Scanner;

public class validator {
    Scanner input = new Scanner(System.in);

    public boolean checkString(String value) {
        char[] chars = value.toCharArray();
        StringBuilder sb = new StringBuilder();
        for (char c : chars) {
            if (Character.isDigit(c)) {
                return false;
            }
        }
        return true;
    }



    public boolean checkTrueFalse(String value){
        while (true){
            switch (value) {
                case "N":
                case "n":
                    return false;
                case "Y":
                case "y":
                    return true;
                default:
                    System.out.print("Invalid Value, Please re-enter(Y/N) : ");
                    break;
            }
            break;
        }
        String val = input.next();
        return checkTrueFalse(val);
    }

    public String checkTrueFalse(String value,String opt1, String opt2){
        while(true){
            if (value.equalsIgnoreCase(opt1)){
                return opt1;
            }
            else if (value.equalsIgnoreCase(opt2)){
                return opt2;
            }else{
                System.out.print("Invalid Value, Please re-enter : ");
                String val = input.next();
                return checkTrueFalse(val,opt1,opt2);
            }
        }
    }
}
