import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ReviewProjectComponent } from './review-project/review-project.component';
import { SelectProjectComponent } from './select-project/select-project.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { ReviewIssueComponent } from './review-issue/review-issue.component';
import { SelectIssueComponent } from './select-issue/select-issue.component';
import { PathComponent } from './path/path.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenubarComponent,
    LoginComponent,
    RegistrationComponent,
    CreateProjectComponent,
    ReviewProjectComponent,
    SelectProjectComponent,
    CreateIssueComponent,
    ReviewIssueComponent,
    SelectIssueComponent,
    PathComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
