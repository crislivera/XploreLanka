package com.example.backend.controller;

import com.example.backend.Mailer.Mailer;
import com.example.backend.Models.MailModel;

public class MailController {

    Mailer mailer = new Mailer();

    public boolean mailer(MailModel mailModel){
        return mailer.sendMail(mailModel);
    }
}
