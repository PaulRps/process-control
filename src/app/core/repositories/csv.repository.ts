import { CsvHeader } from 'src/app/shared/models/CsvHeader';
import { Process } from 'src/app/shared/models/process.model';
import { environment } from 'src/environments/environment';
import { Repository } from './repository';

var remote = window?.require('electron')?.remote;
remote = window?.require('@electron/remote');
var fs = remote?.require('fs');
const csv = remote?.require('csv-parser');
// const fs = require('fs');
// import * as fs from 'fs';
const createObjectCsvWriter = remote.require('csv-writer').createObjectCsvWriter;

export class CsvRepository implements Repository<Process> {
  save(entity: Process): Process {
    //TODO: generate id
    CsvUtil.writeData(environment.csv.fileName, [entity]);
    return entity;
  }

  find(entity: Process): Process {
    throw new Error('Method not implemented.');
  }

  findAll(): Process[] {
    return CsvUtil.readData(environment.csv.fileName);
  }
}

class CsvUtil {
  static getFile(name: String, headers: CsvHeader[]): any {
    return createObjectCsvWriter({
      path: this.getStorageFullName(name),
      header: headers,
      append: true,
    });
    // return null
  }

  static writeData(fileName: String, data: any[]) {
    const headers = this.parseHeaders(data[0]);
    let csvWriter = this.getFile(fileName, headers);
    csvWriter.writeRecords(data).then(() => console.log('The CSV file was written successfully'));
  }

  static parseHeaders(dataObject: any): CsvHeader[] {
    let headers: CsvHeader[] = [];
    Object.keys(dataObject).forEach((field) => headers.push(new CsvHeader(field, field)));
    return headers;
  }

  static readData(fileName: String): any[] {
    const fullName = this.getStorageFullName(fileName);
    let data: any[] = [];
    fs.createReadStream(fullName)
      .pipe(csv())
      .on('data', (row: any) => {
        data.push(data);
        console.log('CSV row: ', row);
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
      });

    return data;
  }

  static getStoragePath(): String {
    return fs.path();
  }
  static getStorageFullName(name: String): String {
    return `${this.getStoragePath()}/${name}.csv`;
  }
}
