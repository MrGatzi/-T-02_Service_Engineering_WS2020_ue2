package com.se.corona;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("patients")
public class Controller {

    @PostMapping("/")
    void postPatient(@RequestBody Patient patient){

    }

    static class Patient{
        Date dateInfect;
        Date dateEnd;
        Date Birthday;
        Gender gender;
        List<String> preconditions;
        String district;
        String state;
    }

    enum Gender{
        W,M,U
    }
}
