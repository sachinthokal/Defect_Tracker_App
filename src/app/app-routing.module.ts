import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ReviewProjectComponent } from './review-project/review-project.component';
import { SelectProjectComponent } from './select-project/select-project.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { ReviewIssueComponent } from './review-issue/review-issue.component';
import { SelectIssueComponent } from './select-issue/select-issue.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'create-project',
    component: CreateProjectComponent,
  },
  {
    path: 'review-project',
    component: ReviewProjectComponent,
  },
  {
    path: 'select-project',
    component: SelectProjectComponent,
  },
  {
    path: 'create-issue',
    component: CreateIssueComponent,
  },
  {
    path: 'review-issue',
    component: ReviewIssueComponent,
  },
  {
    path: 'select-issue',
    component: SelectIssueComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
