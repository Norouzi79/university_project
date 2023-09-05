package com.example.demo.eta.model.service;

import com.example.demo.eta.model.entity.Course;
import com.example.demo.eta.model.entity.Student;
import com.example.demo.eta.model.entity.Teacher;
import com.example.demo.eta.model.repository.CourseDAO;
import com.example.demo.eta.model.repository.TeacherDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;
import javax.persistence.Query;
import java.util.Arrays;
import java.util.List;

@Service
public class TeacherService {

    @Autowired
    private TeacherDAO teacherDAO;
    @Autowired
    private CourseDAO courseDAO;


    @Transactional
    public List<Teacher> listAllTeacher() {
        List<Teacher> teachers = teacherDAO.findAll();

        return teachers;
    }

    @Transactional
    public void insertTeacher(Teacher teacher ) {
        teacherDAO.save(teacher);
    }

    @Transactional
    public void teacherTakeCourse(Course course , Teacher teacher) {
        course.setTeacherList(Arrays.asList(teacher));
        courseDAO.save(course);
    }
    @Transactional
    public void deleteTeacher(int teacherId) {
        teacherDAO.deleteById(teacherId);
    }


}
