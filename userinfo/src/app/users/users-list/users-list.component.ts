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
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserFormComponent } from '../user-form/user-form.component';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.less']
})
export class UsersListComponent implements OnInit {
  //Constants
  userListLabels = GlobalConstants;
  matTableConsts = GlobalConstants?.MAT_TABLE_DATA_LABELS;
  matTableHeaders = GlobalConstants?.MAT_TABLE_HEADER_LABELS;
  displayedColumns = [this.matTableConsts?.avatar, this.matTableConsts?.email, this.matTableConsts?.first_name, this.matTableConsts?.last_name, this.matTableConsts?.edit, this.matTableConsts?.delete];
  //Variable declaration
  filterValue: any;
  userNotFound:boolean = true;
  dataSource: any;

  /**
   * 
   * @param userService 
   * @param loaderService 
   * @param dialog 
   * @param router 
   * @param authService 
   */
  constructor(private userService: UserService,
    private loaderService: LoaderService,
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService,) { }
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, {}) sort!: MatSort;

  onNavigate(id?: any): void {

  }

  /**
   * Update method
   * @param editRdId 
   */
  edit(editRdId?: any): void {
    this.loaderService.show();
    let userData: any;
    this.userService.getUser(editRdId).subscribe((data: any) => {
      userData = data;
      this.loaderService.hide();
      const dialogRef = this.dialog.open(UserFormComponent, {
        width: '400px',
        height: '620px',
        data: {
          userDetails: userData
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }, error => {
      console.log(error);
    });
  }

  /**
   * User delete method
   * @param id 
   */
  delete(id?: any): void {
    this.loaderService.show();
    this.userService.deleteUser(id).subscribe((data: any) => {
      console.log(data)
      this.loaderService.hide();
    }, error => {
      console.log(error);
    });
  }

  ngAfterViewInit() {
  }

  /**
   * Init method
   */
  ngOnInit() {
    this.loaderService.show();
    this.userService.getUsers().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loaderService.hide();
    });

  }

  /**
   * User Details method
   * @param currentRdId 
   */
  userDetails(currentRdId?: any): void {
    this.loaderService.show();
    let userData: any;
    this.userService.getUser(currentRdId).subscribe((data: any) => {
      userData = data;
      this.loaderService.hide();
      const dialogRef = this.dialog.open(CommonDialogComponent, {
        width: '350px',
        height: '380px',
        data: {
          userDetails: userData
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }, error => {
      console.log(error);
    });
  }

  /**
   * Fileter the details
   * @param value 
   */
  filterProduct(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.userNotFound = this.dataSource?.filteredData?.length>0? true: false;
  }

  /**
   * Add User Form
   */
  userForm(): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '400px',
      height: '620px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}