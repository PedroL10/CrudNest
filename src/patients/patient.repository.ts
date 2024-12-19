import { EntityRepository, Repository } from 'typeorm';
import { Patient } from './patient.entity';

@EntityRepository(Patient)
export class PatientsRepository extends Repository<Patient> {}