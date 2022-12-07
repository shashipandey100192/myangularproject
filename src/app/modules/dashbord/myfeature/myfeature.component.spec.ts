import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfeatureComponent } from './myfeature.component';

describe('MyfeatureComponent', () => {
  let component: MyfeatureComponent;
  let fixture: ComponentFixture<MyfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
