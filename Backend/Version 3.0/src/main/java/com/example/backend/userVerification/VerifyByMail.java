package com.example.backend.userVerification;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import java.util.Random;

public class VerifyByMail {

    private final static  String characterList = "1234567890";
    private static Random random = new Random();
    private  static String OTP = "";

    public boolean verifyMail(String mail, String name, String YOUR_DOMAIN_NAME, String API_KEY) {

        try {

            char character;
            for (int c = 0; c < 6; c++) {
                character = characterList.charAt(random.nextInt(characterList.length()));
                OTP += character;
            }

            String message = "Hi " + name + ", Please use the below code to verify your account: " + OTP;

            HttpResponse<JsonNode> request = Unirest.post("https://api.mailgun.net/v3/" + YOUR_DOMAIN_NAME + "/messages")
                    .basicAuth("api", API_KEY)
                    .queryString("from", "XploreLanka noreply@xplorelanka.lk")
                    .queryString("to", mail)
                    .queryString("subject", "Account Verification")
                    .queryString("text", message)
                    .asJson();
            return true;
        }catch(UnirestException ex){
            ex.printStackTrace();
        }

        return false;


    }

    public static String getOTP() {
        return OTP;
    }
}
