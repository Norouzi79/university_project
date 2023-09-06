package com.example.demo.eta.model.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.annotations.ApiModel;
import springfox.documentation.annotations.ApiIgnore;

import javax.persistence.*;
import java.util.List;

@Entity(name = "course")
@Table(name = "course")
@ApiModel
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int courseId;
    @Column
    private String courseName;

    //relationships
    @JsonIgnore
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "course_teacher__jt",
            joinColumns = @JoinColumn(name = "courseId"),
            inverseJoinColumns = @JoinColumn(name = "teacherId"))
    private List<Teacher> teacherList;

    @JsonIgnore
    @ManyToMany
    @JoinTable(name = "course_student__jt",
            joinColumns = @JoinColumn(name = "courseId"),
            inverseJoinColumns =@JoinColumn(name = "studentId"))
    private List<Student> students;

    //getters and setters


    public int getCourseId() {
        return courseId;
    }

    public Course setCourseId(int courseId) {
        this.courseId = courseId;
        return this;
    }

    public String getCourseName() {
        return courseName;
    }

    public Course setCourseName(String courseName) {
        this.courseName = courseName;
        return this;
    }

    public List<Teacher> getTeacherList() {
        return teacherList;
    }

    public Course setTeacherList(List<Teacher> teacherList) {
        this.teacherList = teacherList;
        return this;
    }

    public List<Student> getStudents() {
        return students;
    }

    public Course setStudents(List<Student> students) {
        this.students = students;
        return this;
    }
}
