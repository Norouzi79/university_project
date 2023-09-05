package com.example.demo.etaforperson.eta.model.repository;

import com.example.demo.etaforperson.eta.model.entity.Person;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;

@Repository
public class PersonDAO {
    @PersistenceContext(type = PersistenceContextType.EXTENDED)
    private EntityManager em;

    public List<Person> selectAllPerson() {
        List<Person> people = new ArrayList<>();

        Query query = em.createQuery("select x from person x");
        people = query.getResultList();
        System.out.println("All Person Selected");
        return people;
    }

    public Person selectOnePerson(int personId) {
        Query query = em.createQuery("select x from person x where x.personId=:i");
        query.setParameter("i" , personId);
        Person person = (Person) query.getSingleResult();
        System.out.println("one Person selected");
        return person;
    }

    public void insertPerson(Person person) {
        em.merge(person);
        System.out.println("one person persisted");

    }


}
