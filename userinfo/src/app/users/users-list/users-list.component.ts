import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.less']
})
export class UsersListComponent implements OnInit {
  displayedColumns = ['avatar', 'email', 'first_name', 'last_name', 'edit', 'delete'];
  
  constructor(private userService:UserService){}
  dataSource: any;
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort, {}) sort: MatSort;
 

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
    this.userService.getUsers().subscribe((data : any) => {
      this.dataSource = new MatTableDataSource(data.data);
    });

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