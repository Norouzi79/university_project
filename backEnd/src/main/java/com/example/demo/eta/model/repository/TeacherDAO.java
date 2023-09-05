package com.example.demo.eta.model.repository;

import com.example.demo.eta.model.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherDAO extends JpaRepository<Teacher , Integer> {
}
