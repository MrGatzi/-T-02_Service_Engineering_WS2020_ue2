package com.se.corona;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("patient")
public class Controller {

    PatientRepository patientRepository;
    Logger logger = LoggerFactory.getLogger(Controller.class);

    @Autowired
    Controller(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @PostMapping()
    void postPatient(@RequestBody Patient patient) {
        this.patientRepository.save(patient);
    }

    @GetMapping()
    List<Patient> getPatients(@RequestParam(required = false) Long startBefore, @RequestParam(required = false) Long startAfter, @RequestParam(required = false) Long endBefore, @RequestParam(required = false) Long endAfter) {
        List<Patient> patients = patientRepository.findAll();
        if (startBefore != null) {
            patients = patients.stream().filter(p -> p.dateInfect <= startBefore).collect(Collectors.toList());
        }
        if (startAfter != null) {
            patients = patients.stream().filter(p -> p.dateInfect >= startAfter).collect(Collectors.toList());
        }
        if (endBefore != null) {
            patients = patients.stream().filter(p -> p.dateEnd <= endBefore).collect(Collectors.toList());
        }
        if (endAfter != null) {
            patients = patients.stream().filter(p -> p.dateInfect >= endAfter).collect(Collectors.toList());
        }
        return patients;
    }

    @GetMapping("/{id}")
    ResponseEntity<Object> getPatient(@PathVariable Long id) {
        if (this.patientRepository.existsById(id)) {
            return new ResponseEntity<>(this.patientRepository.findById(id), HttpStatus.OK);
        } else return new ResponseEntity<>("Patient with id " + id + " didn't exist in DB.", HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{id}")
    ResponseEntity<Object> updatePatient(@RequestBody Patient patient, @PathVariable Long id) {
        if (this.patientRepository.existsById(id)) {
            patient.setId(id);
            this.patientRepository.save(patient);
            return new ResponseEntity<>(patient, HttpStatus.OK);
        } else return new ResponseEntity<>("Patient with id " + id + " didn't exist in DB.", HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    void deletePatient(@PathVariable Long id) {
        this.patientRepository.deleteById(id);
    }
}
