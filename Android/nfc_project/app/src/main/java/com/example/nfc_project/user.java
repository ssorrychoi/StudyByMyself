package com.example.nfc_project;

public class user {
    private String name;
    private String time;

    public user(String name, String time) {
        this.name = name;
        this.time = time;
    }

    public String getname() {
        return name;
    }

    public void setname(String name) {
        this.name = name;
    }

    public String gettime() {
        return time;
    }

    public void settime(String time) {
        this.time = time;
    }

    @Override
    public String toString() {
        return "user{" +
                "name='" + name + '\'' +
                ", time='" + time + '\'' +
                '}';
    }
}