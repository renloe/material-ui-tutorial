import { Component, ViewChild } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';
import { Customer } from '../customer';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  customerList: Customer[] | undefined;
  dataSource: any;
  displayColumns = ['code', 'name', 'email', 'phone', 'status', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: MasterService) {
    this.service.getCustomer().subscribe({
      next: (res) => {
        this.customerList = res;
        this.dataSource = new MatTableDataSource<Customer>(this.customerList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    });
  }

  filterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
}
