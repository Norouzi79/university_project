package com.example.demo.eta.model.service;

import com.example.demo.eta.model.entity.Course;
import com.example.demo.eta.model.repository.CourseDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseDAO courseDAO;



    public List<Course> listAll() {
        List<Course> courses = courseDAO.findAll();
        return courses;
    }

    @Transactional
    public void insertCourse(Course course) {
        courseDAO.save(course);
    }




    @Transactional
    public void updateCourse(Course course) {
        courseDAO.save(course);
    }


    @Transactional
    public void deleteCourse (int courseId) {
        courseDAO.deleteById(courseId);
    }


}
