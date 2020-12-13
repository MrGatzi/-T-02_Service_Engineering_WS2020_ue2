package com.se.corona;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("patients")
public class Controller {

    PatientRepository patientRepository;

    @Autowired
    Controller(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;

    }

    @PostMapping("/")
    void postPatient(@RequestBody Patient patient) {

    }

    @GetMapping("/")
    List<Patient> getPatients() {
        return patientRepository.findAll();
    }

    @PutMapping("/{id}")
    ResponseEntity<Object> updatePatient(@RequestBody Patient patient, @PathVariable String id) {
        if(this.patientRepository.existsById(id)) {
            patient.setId(id);
            this.patientRepository.save(patient);
            return new ResponseEntity<>(patient, HttpStatus.OK);
        }
        else return new ResponseEntity<>("Patient with id "+ id + " didn't exist in DB.",HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/{id}")
    void deletePatient(@PathVariable String id) {
        this.patientRepository.deleteById(id);
    }
}
