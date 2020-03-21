package com.example.backend.Mailer;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

public class Mailer {

    public static void main(String[] args) {

        String recipient = "ge.rusiru@gmail.com";
        String sender = "hasani88d@gmail.com";
        String host ="127.0.0.1:80";

        Properties properties = System.getProperties();
        properties.setProperty("mail.smtp.host", host);
        Session session = Session.getDefaultInstance(properties);

        try{
            MimeMessage msg = new MimeMessage(session);
            msg.setFrom(new InternetAddress(sender));
            msg.addRecipient(Message.RecipientType.TO, new InternetAddress(recipient));
            msg.setSubject("XploreLanka by Informates");
            msg.setText("This is a test one");

            Transport.send(msg);
            System.out.println("Mail successfully sent");

        }

        catch(MessagingException ex){

           ex.printStackTrace();

        }

    }
}
