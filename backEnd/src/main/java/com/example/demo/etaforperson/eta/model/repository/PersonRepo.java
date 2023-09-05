package com.example.demo.etaforperson.eta.model.repository;

import com.example.demo.etaforperson.eta.model.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepo extends JpaRepository<Person, Integer> {
    Person findByPersonId(int id);
}
