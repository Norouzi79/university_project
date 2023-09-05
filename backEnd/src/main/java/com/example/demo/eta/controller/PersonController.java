package com.example.demo.eta.controller;

import com.example.demo.etaforperson.eta.model.entity.Person;
import com.example.demo.etaforperson.eta.model.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/person")
@CrossOrigin(origins = "http://localhost:3000/")
public class PersonController {

    @Autowired
    private PersonService personService;

    @RequestMapping("/selectAllPerson")
    public List<Person>    selectAllPerson() {
        return personService.selectAllPerson();

    }

    @RequestMapping("/selectOnePerson")
    public Person selectOnePerson(@RequestParam int personId) {
        System.out.println(personService.selectOnePerson(personId).getName() + "called");
        return personService.selectOnePerson(personId);
    }

    @RequestMapping("/insertPerson")
    public void insertPerson(@ModelAttribute Person person) {
        personService.insertPerson(person);
    }

}
