package com.example.demo.eta.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "admin")
@Table(name = "admin")
public class Admin {
    @Id
    private int adminId;
    @Column
    private String adminName;
    @Column
    private String adminLastName;







    //getters and setters

    public int getAdminId() {
        return adminId;
    }

    public Admin setAdminId(int adminId) {
        this.adminId = adminId;
        return this;
    }

    public String getAdminName() {
        return adminName;
    }

    public Admin setAdminName(String adminName) {
        this.adminName = adminName;
        return this;
    }

    public String getAdminLastName() {
        return adminLastName;
    }

    public Admin setAdminLastName(String adminLastName) {
        this.adminLastName = adminLastName;
        return this;
    }
}
