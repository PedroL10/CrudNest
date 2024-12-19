import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PatientsService } from './patient.service';
import { Patient } from './patient.entity';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  findAll(): Patient[] {
    return this.patientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Patient {
    return this.patientsService.findOne(Number(id));
  }

  @Post()
  create(@Body() patient: Patient): Patient {
    return this.patientsService.create(patient);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() patient: Patient): Patient {
    return this.patientsService.update(Number(id), patient);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.patientsService.remove(Number(id));
  }
}