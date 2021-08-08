import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constants';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { CustomerService } from '../../services/customer.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  //Label constants
  loginLabels = GlobalConstants;

  //Variable declaration
  uname: string = 'SantoshB';
  password: string = 'Reddy123';

  // Form builder
  profileForm = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(8)]],
    pwd: [null, [Validators.required, Validators.minLength(8)]]
  });

  /**
   * Constructon for initializing
   * @param fb 
   * @param custSevice 
   * @param router 
   * @param authService 
   * @param loaderService 
   */
  constructor(private fb: FormBuilder,
    private custSevice: CustomerService,
    private router: Router,
    private authService: AuthService,
    private loaderService: LoaderService) { }

  //Form validator
  get f() {
    return this.profileForm.controls;
  }
  
  // NgOnInit lifecycle method
  ngOnInit(): void {
    this.patchValues();
  }

  /**
   * Patching the values
   */
  patchValues(): void {
    this.profileForm.patchValue({
      name: 'SantoshB',
      pwd: 'Reddy123'
    });
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.loaderService.show();
    let gname = this.profileForm.value.name;
    let gpwd = this.profileForm.value.pwd;
    if (gname === this.uname && gpwd === this.password) {
      this.custSevice.setId('123AA');
      this.authService.authSuccess();
      this.custSevice.setName(this.profileForm.value.name);
      this.router.navigate(['/users'])
    } else {
      this.loaderService.hide();
      alert(this.loginLabels?.loginErr);
    }
  }

}
