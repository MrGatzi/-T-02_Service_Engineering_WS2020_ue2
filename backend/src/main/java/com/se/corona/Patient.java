package com.se.corona;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Patient {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long id;
    long dateInfect;
    long dateEnd;
    long birthday;
    Gender gender;
    String preConditions;
    String district;
    State state;

    @Id
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getDateInfect() {
        return dateInfect;
    }

    public void setDateInfect(long dateInfect) {
        this.dateInfect = dateInfect;
    }

    public long getDateEnd() {
        return dateEnd;
    }

    public void setDateEnd(long dateEnd) {
        this.dateEnd = dateEnd;
    }

    public long getBirthday() {
        return birthday;
    }

    public void setBirthday(long birthday) {
        this.birthday = birthday;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getPreConditions() {
        return preConditions;
    }

    public void setPreConditions(String preConditions) {
        this.preConditions = preConditions;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

}

enum Gender {
    W, M, U
}

enum State {
    W, OOE, NOE, SBG, KTN, BGLD, T, VBG, STMK
}
