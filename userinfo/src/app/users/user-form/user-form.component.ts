import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalConstants } from 'src/app/common/global-constants';
import { LoaderService } from 'src/app/services/loader.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.less']
})
export class UserFormComponent implements OnInit {

  userLabels = GlobalConstants;
  userData!: any;

  formHeader: string = this.userLabels?.UserLbl;

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private loaderService: LoaderService,
    private userService: UserService,) { }

  numericNumberReg: string = '/^[0-9]\d*$/';
  userForm = this.fb.group({
    fname: [null, [Validators.required, Validators.minLength(2)]],
    lname: [null, [Validators.required, Validators.minLength(2)]],
    uname: [null, [Validators.required, Validators.minLength(8)]],
    pnum: [null, [Validators.required, Validators.minLength(10)]],
    email: [null, [Validators.required]],
    addr: [null, [Validators.required]],
    pcode: [null, [Validators.required, Validators.minLength(6)]]
  });


  get f() {
    return this.userForm.controls;
  }

  ngOnInit(): void {
    this.userData = this.data.userDetails.data;
    if (this.userData) {
      this.formHeader = this.userLabels?.updUserLbl;
      this.patchValues(this.userData);
    }
  }

  patchValues(userData: any): void {
    this.userForm.patchValue({
      fname: userData.first_name,
      lname: userData.last_name,
      email: userData.email
    });
  }

  onSubmit(): void {
    let formDetails = this.userForm.value;
    if (this.userData) {
      if (this.userForm.valid) {
        this.loaderService.show();
        this.userService.updateUser(this.userData.id, formDetails).subscribe((data: any) => {
          console.log(data)
          this.loaderService.hide();
        }, error => {
          console.log(error);
        });
      }
    } else {
      if (this.userForm.valid) {
        this.loaderService.show();
        this.userService.addUser(formDetails).subscribe((data: any) => {
          console.log(data)
          this.loaderService.hide();
        }, error => {
          console.log(error);
        });
      }
    }
  }

}
