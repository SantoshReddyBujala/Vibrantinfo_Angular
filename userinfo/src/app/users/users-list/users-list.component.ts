import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.less']
})
export class UsersListComponent implements OnInit {
  displayedColumns = ['productName', 'productCode', 'prodRating', 'edit', 'delete'];
  products = [{
    id: 1,
    productName: 'Netgear Cable Modem',
    productCode: 'CM700',
    proddescription: 'Netgear Cable Modem compatible with all cables',
    prodRating: 4.0
  }];
  dataSource = new MatTableDataSource(this.products);
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort, {}) sort: MatSort;
  constructor() { }

  onNavigate(id?: any){

  }

  edit(edit?: any){

  }

  delete(id?: any){

  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    //this.dataSource = this.products;
    //this.dataSource.paginator = this.paginator;

  }

  


  filterProduct(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
export interface Product {
  id: number | null;
  productName: string;
  productCode: string;
  proddescription?: string;
  prodRating?: number;
  loaging$?:any;
}