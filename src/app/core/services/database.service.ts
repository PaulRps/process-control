import { Injectable } from '@angular/core';
import { Process } from 'src/app/shared/models/process.model';
import { CsvRepository } from '../repositories/csv.repository';
import { Repository } from '../repositories/repository';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  repository: Repository<Process> = new CsvRepository();

  save(entity: any) {
    this.repository.save(entity);
  }

  find(entity: any): any {
    return this.repository.find(entity);
  }

  findAll(): any[] {
    return this.repository.findAll();
  }
}
