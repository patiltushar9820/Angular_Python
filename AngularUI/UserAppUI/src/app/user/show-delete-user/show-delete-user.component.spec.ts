import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteUserComponent } from './show-delete-user.component';

describe('ShowDeleteUserComponent', () => {
  let component: ShowDeleteUserComponent;
  let fixture: ComponentFixture<ShowDeleteUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDeleteUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
