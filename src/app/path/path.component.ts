import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css'],
})
export class PathComponent implements OnInit {
  path = 'Home / Login';
  userName = 'Guest';
  constructor() {}
  ngOnInit(): void {}
}
