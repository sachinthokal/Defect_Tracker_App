import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  createProjectdata = new FormGroup({
    projectName: new FormControl(''),
    projectType: new FormControl(''),
    teamSize: new FormControl(''),
    owner: new FormControl(''),
    projectSummary: new FormControl(''),
    projectDetails: new FormControl(''),
  });

  submit() {
    console.log(this.createProjectdata.value);
    this.createProjectdata.reset();
  }
}
