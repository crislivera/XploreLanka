package com.example.backend.mobVerification;

import com.telesign.MessagingClient;
import com.telesign.RestClient;
import com.telesign.Util;

public class HelloTelesign {

    public static void main(String[] args) {

        String customerId = "63CC3D9C-DC61-4011-A687-66D6339F2442";
        String apiKey = "k91q+TFRLmJLcxmuQGh8JDHDiGC/H4ASGxMEAbOqw/QmcZPV9s32V7FiLU/ntntIVo0d5/mEi0j7gln/wIrmdA==";
        String phoneNumber = "94763358718";
        String verifyCode = Util.randomWithNDigits(5);
        String message = String.format("Your code is %s", verifyCode);
        String messageType = "OTP";

        try {
            MessagingClient messagingClient = new MessagingClient(customerId, apiKey);
            RestClient.TelesignResponse telesignResponse = messagingClient.message(phoneNumber, message, messageType, null);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
  