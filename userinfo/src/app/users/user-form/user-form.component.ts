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


  userForm = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(8)]],
    lname: [null, [Validators.required, Validators.minLength(8)]],
    uname: [null, [Validators.required, Validators.minLength(8)]],
    pnum: [null, [Validators.required, Validators.minLength(8)]],
    email: [null, [Validators.required, Validators.minLength(8)]],
    addr: [null, [Validators.required, Validators.minLength(8)]],
    pcode: [null, [Validators.required, Validators.minLength(8)]]
  });

  
  get f() {
    return this.userForm.controls;
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    
  }

}
