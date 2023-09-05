package com.example.demo.eta.model.entity;

import javax.persistence.*;
import java.util.List;

@Entity(name = "teacher")
@Table(name = "teacher")
public class Teacher {

    @Id
    private int teacherId;
    @Column
    private String teacherName;
    @Column
    private String teacherFamily;






    //getters and setters
    public int getTeacherId() {
        return teacherId;
    }

    public Teacher setTeacherId(int teacherId) {
        this.teacherId = teacherId;
        return this;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public Teacher setTeacherName(String teacherName) {
        this.teacherName = teacherName;
        return this;
    }

    public String getTeacherFamily() {
        return teacherFamily;
    }

    public Teacher setTeacherFamily(String teacherFamily) {
        this.teacherFamily = teacherFamily;
        return this;
    }


}
