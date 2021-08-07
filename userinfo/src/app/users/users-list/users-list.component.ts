import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/user/user.service';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/common/global-constants';
import { LoaderService } from 'src/app/services/loader.service';
import { CommonDialogComponent } from '../common-dialog/common-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.less']
})
export class UsersListComponent implements OnInit {
  filterValue: any;
  userListLabels = GlobalConstants;
  matTableConsts = GlobalConstants?.MAT_TABLE_DATA_LABELS;
  matTableHeaders = GlobalConstants?.MAT_TABLE_HEADER_LABELS;
  displayedColumns = [this.matTableConsts?.avatar, this.matTableConsts?.email, this.matTableConsts?.first_name, this.matTableConsts?.last_name, this.matTableConsts?.edit, this.matTableConsts?.delete];

  constructor(private userService: UserService,
    private loaderService: LoaderService,
    public dialog: MatDialog) { }
  dataSource: any;
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort, {}) sort: MatSort;


  onNavigate(id?: any): void {

  }

  edit(edit?: any): void {

  }

  delete(id?: any): void {

  }

  userDetails(): void {

  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.loaderService.show();
    this.userService.getUsers().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data.data);
      this.loaderService.hide();
    });

  }

  getRecord(currentRecord?: any): void {

    const dialogRef = this.dialog.open(CommonDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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
  loaging$?: any;
}