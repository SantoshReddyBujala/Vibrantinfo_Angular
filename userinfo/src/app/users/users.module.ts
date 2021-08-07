import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonDialogComponent } from './common-dialog/common-dialog.component';
import { 
  AuthGuardService as AuthGuard 
} from '../services/auth-guard.service'


const routes: Routes = [
  {path: '', component: UsersListComponent}
];



@NgModule({
  declarations: [
    UsersListComponent,
    UserFormComponent,
    CommonDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [RouterModule]
})
export class UsersModule { }
