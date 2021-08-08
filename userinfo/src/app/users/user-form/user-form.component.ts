import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.less']
})
export class UserFormComponent implements OnInit {

  userLabels =GlobalConstants;

  constructor(private fb: FormBuilder,) { }

   numericNumberReg: string = '/^[0-9]\d*$/';
  userForm = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(2)]],
    lname: [null, [Validators.required, Validators.minLength(2)]],
    uname: [null, [Validators.required, Validators.minLength(8)]],
    pnum: [null, [Validators.required, Validators.minLength(10)]],
    email: [null, [Validators.required]],
    addr: [null, [Validators.required]],
    pcode: [null, [Validators.required, Validators.minLength(6), Validators.pattern(this.numericNumberReg)]]
  });

  
  get f() {
    return this.userForm.controls;
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    
  }

}
