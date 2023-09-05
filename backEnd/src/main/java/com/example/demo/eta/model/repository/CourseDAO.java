package com.example.demo.eta.model.repository;

import com.example.demo.eta.model.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseDAO extends JpaRepository<Course , Integer> {
}
