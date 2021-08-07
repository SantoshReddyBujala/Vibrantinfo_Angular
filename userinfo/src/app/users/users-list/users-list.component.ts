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
  filterValue: any;
  userListLabels = GlobalConstants;
  matTableConsts = GlobalConstants?.MAT_TABLE_DATA_LABELS;
  matTableHeaders = GlobalConstants?.MAT_TABLE_HEADER_LABELS;
  displayedColumns = [this.matTableConsts?.avatar, this.matTableConsts?.email, this.matTableConsts?.first_name, this.matTableConsts?.last_name, this.matTableConsts?.edit, this.matTableConsts?.delete];

  constructor(private userService: UserService,
    private loaderService: LoaderService,
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService,) { }
  dataSource: any;
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort, {}) sort: MatSort;


  onNavigate(id?: any): void {

  }

  edit(edit?: any): void {

  }

  delete(id?: any): void {
    this.loaderService.show();
    this.userService.deleteUser(id).subscribe((data: any) => {
      console.log(data)
      this.loaderService.hide();
    });
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
    });
  }


  filterProduct(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
  }
  userForm(): void{
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '400px',
      height: '570px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}