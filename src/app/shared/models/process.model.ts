export class Process {
  id: Number;
  name: String;
  date: String;
  constructor(id: Number = 0, name: String = '', date: String = '') {
    this.id = id;
    this.name = name;
    this.date = date;
  }
}
