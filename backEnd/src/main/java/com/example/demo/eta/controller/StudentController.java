package com.example.demo.eta.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(name = "student")
@CrossOrigin(origins = "http://localhost:3000/")
public class StudentController {

    public void listCourse() {}

    public void listPresentedCourse() {}

    public void takeCourse() {}

    public void dropCourse() {}



}
