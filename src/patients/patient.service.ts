import { Injectable } from '@nestjs/common';
import { Patient } from './patient.entity';

@Injectable()
export class PatientsService {
  private patients: Patient[] = [];
  private idCounter = 1;

  findAll(): Patient[] {
    return this.patients;
  }

  findOne(id: number): Patient {
    return this.patients.find(patient => patient.id === id);
  }

  create(patient: Patient): Patient {
    patient.id = this.idCounter++;
    this.patients.push(patient);
    return patient;
  }

  update(id: number, updatedPatient: Patient): Patient {
    const patientIndex = this.patients.findIndex(patient => patient.id === id);
    this.patients[patientIndex] = { ...updatedPatient, id };
    return this.patients[patientIndex];
  }

  remove(id: number): void {
    this.patients = this.patients.filter(patient => patient.id !== id);
  }
}

