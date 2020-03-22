package com.example.backend.Models;

import com.example.backend.DBConnection.DBFunction;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Objects;

public class MailModel {
    String subject;
    String body;
    boolean sendAll = false;

    ArrayList<String> mailList = new ArrayList<>();

    DBFunction dbFunction = new DBFunction();

    public MailModel(String subject, String body, boolean sendAll, ArrayList<String> mailList) {
        this.subject = subject;
        this.body = body;
        this.sendAll = sendAll;
        this.mailList = mailList;
    }

    public MailModel(String subject, String body, ArrayList<String> mailList) {
        this.subject = subject;
        this.body = body;
        this.mailList = mailList;
    }

    public MailModel(String subject, String body, boolean sendAll) throws SQLException {
        this.subject = subject;
        this.body = body;
        this.sendAll = sendAll;

        mailList = dbFunction.getAllMails();
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public boolean isSendAll() {
        return sendAll;
    }

    public void setSendAll(boolean sendAll) {
        this.sendAll = sendAll;
    }

    public ArrayList<String> getMailList() {
        return mailList;
    }

    public void setMailList(ArrayList<String> mailList) {
        this.mailList = mailList;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MailModel mailModel = (MailModel) o;
        return sendAll == mailModel.sendAll &&
                subject.equals(mailModel.subject) &&
                body.equals(mailModel.body) &&
                mailList.equals(mailModel.mailList);
    }

    @Override
    public int hashCode() {
        return Objects.hash(subject, body, sendAll, mailList);
    }

    @Override
    public String toString() {
        return "MailModel{" +
                "subject='" + subject + '\'' +
                ", body='" + body + '\'' +
                ", sendAll=" + sendAll +
                ", mailList=" + mailList +
                '}';
    }
}
