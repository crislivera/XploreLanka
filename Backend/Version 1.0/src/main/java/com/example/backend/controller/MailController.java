package com.example.backend.controller;

import com.example.backend.Mailer.Mailer;
import com.example.backend.Models.MailModel;
import com.example.backend.Models.User;
import com.example.backend.mailVerification.VerifyByMail;

public class MailController {

    Mailer mailer = new Mailer();
    VerifyByMail verifyByMail = new VerifyByMail();

    public boolean mailer(MailModel mailModel){
        return mailer.sendMail(mailModel);
    }

    public boolean verifyByMail (User user){
        return verifyByMail.verifyMail(user.getEmail());
    }

}
