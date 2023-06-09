import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginChefComponent } from './login-chef.component';

describe('LoginChefComponent', () => {
  let component: LoginChefComponent;
  let fixture: ComponentFixture<LoginChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginChefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
