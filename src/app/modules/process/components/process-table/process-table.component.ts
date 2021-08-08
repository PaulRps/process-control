import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Process } from 'src/app/shared/models/process.model';

@Component({
  selector: 'app-process-table',
  templateUrl: './process-table.component.html',
  styleUrls: ['./process-table.component.scss'],
})
export class ProcessTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'date', 'action'];
  dataSource: MatTableDataSource<Process> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    var list = [];
    for (var i = 0; i < 10; i++) {
      var p = new Process(i + 1, 'Processo nome', '10/10/2021');
      (p as any).hideAction = true;
      list.push(p);
    }
    this.dataSource.data = list;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  showAction(row: any) {
    row.hideAction = false;
  }

  hideAction(row: any) {
    row.hideAction = true;
  }

  add() {
    this.router.navigate([`add`], { relativeTo: this.route });
  }

  edit(row: Process) {
    this.router.navigate(['edit', row.id], { relativeTo: this.route });
  }

  delete(row: Process) {}
}
