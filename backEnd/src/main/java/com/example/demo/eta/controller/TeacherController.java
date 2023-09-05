package com.example.demo.eta.controller;

import com.example.demo.eta.model.entity.Course;
import com.example.demo.eta.model.entity.Teacher;
import com.example.demo.eta.model.service.CourseService;
import com.example.demo.eta.model.service.TeacherService;
import com.sun.deploy.net.HttpResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping( "/teacher")
@CrossOrigin(origins = "http://localhost:3000/")
public class TeacherController {
    @Autowired
    private CourseService courseService;
    @Autowired
    private TeacherService teacherService;

    @RequestMapping("/signUp")
    public void signUp(@ModelAttribute Teacher teacher)  {
        teacherService.insertTeacher(teacher);
    }


    @RequestMapping("/listCourse")
    public List<Course> listCourse() {
        List<Course> courses = courseService.listAll();
        return courses;
    }

    @RequestMapping("/takeCourse")
    public void teacherTakeCourse(@ModelAttribute Course course , @ModelAttribute Teacher teacher) {
        teacherService.teacherTakeCourse(course, teacher);
    }

    public void dropCourse () {}

    public void studentReqAccept() {
    }

    public void studentReqReject() {
    }






}
