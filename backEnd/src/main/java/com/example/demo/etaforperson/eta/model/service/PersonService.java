package com.example.demo.etaforperson.eta.model.service;

import com.example.demo.etaforperson.eta.model.entity.Person;
import com.example.demo.etaforperson.eta.model.repository.PersonDAO;
import com.example.demo.etaforperson.eta.model.repository.PersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PersonService {
    @Autowired
    private PersonRepo personRepo;

    @Autowired
    private PersonDAO personDAO;

    public List<Person> selectAllPerson() {
        List<Person> people =personRepo.findAll();
        return people;
    }

    public Person selectOnePerson(int id) {
        //Person person =  personDAO.selectOnePerson(id);
        Person person= personRepo.findByPersonId(id);
        return person;
    }

    @Transactional
    public void insertPerson(Person person) {
        personDAO.insertPerson(person);
    }

}
