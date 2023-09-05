package com.example.demo.eta.model.entity;

import javax.persistence.*;
import java.util.List;

@Entity(name = "student")
@Table(name = "student")
public class Student {

    @Id
    private int studentId;
    @Column
    private String studentName;
    @Column
    private String studentFamily;


    //relationships






    //getters and setters


    public int getStudentId() {
        return studentId;
    }

    public Student setStudentId(int studentId) {
        this.studentId = studentId;
        return this;
    }

    public String getStudentName() {
        return studentName;
    }

    public Student setStudentName(String studentName) {
        this.studentName = studentName;
        return this;
    }

    public String getStudentFamily() {
        return studentFamily;
    }

    public Student setStudentFamily(String studentFamily) {
        this.studentFamily = studentFamily;
        return this;
    }


}
