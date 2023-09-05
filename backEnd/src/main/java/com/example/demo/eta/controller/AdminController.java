package com.example.demo.eta.controller;

import com.example.demo.eta.model.entity.Course;
import com.example.demo.eta.model.entity.Student;
import com.example.demo.eta.model.entity.Teacher;
import com.example.demo.eta.model.service.CourseService;
import com.example.demo.eta.model.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000/")
public class AdminController {

    @Autowired
    private CourseService courseService;
    @Autowired
    private TeacherService teacherService;


    // http://localhost:8081/admin/listAllCourse
    @RequestMapping("/listAllCourse")
    public List<Course> listCourse() {
        List<Course> courseList = courseService.listAll();
        for (Course course : courseList) {
            System.out.println(course.getCourseName());
        }
        return courseList;

    }

    // http://localhost:8081/admin/insertCourse?courseName=os
    @RequestMapping("/insertCourse")
    public void insertCourse(@ModelAttribute Course course) {
        courseService.insertCourse(course);
    }


    //http://localhost:8081/admin/updateCourse?courseId=1&courseName=DB
    @RequestMapping("/updateCourse")
    public void updateCourse(@ModelAttribute Course course , @RequestHeader("teacherItem") List<Teacher> teacherList) {

        List<Teacher> teachers = teacherList;
        Course goingToUpdate = new Course().setCourseId(1).setCourseName("awdaw").setTeacherList(teachers);

        course.setTeacherList(teachers);

        courseService.updateCourse(course);

    }

    @RequestMapping("/deleteCourse")
    public void deleteCourse(@RequestParam int courseId) {
        courseService.deleteCourse(courseId);

    }


    // http://localhost:8081/admin/listAllTeacher
    @RequestMapping("/listAllTeacher")
    public List<Teacher> listAllTeacher() {

        return teacherService.listAllTeacher();
    }

    //http://localhost:8081/admin/insertTeacher?teacherName=ali



    @RequestMapping("/deleteTeacher")
    public void deleteTeacher(@RequestParam int teacherId) {
        teacherService.deleteTeacher(teacherId);
    }



}
