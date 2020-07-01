import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmailFormGroupComponent } from './cmail-form-group.component';

describe('CmailFormGroupComponent', () => {
  let component: CmailFormGroupComponent;
  let fixture: ComponentFixture<CmailFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmailFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmailFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
