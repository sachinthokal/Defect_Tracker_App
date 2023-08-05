import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIssueComponent } from './select-issue.component';

describe('SelectIssueComponent', () => {
  let component: SelectIssueComponent;
  let fixture: ComponentFixture<SelectIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectIssueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
