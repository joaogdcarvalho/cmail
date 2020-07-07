import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmailListItemComponent } from './cmail-list-item.component';

describe('CmailListItemComponent', () => {
  let component: CmailListItemComponent;
  let fixture: ComponentFixture<CmailListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmailListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmailListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
