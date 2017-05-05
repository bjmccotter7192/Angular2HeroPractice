import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBillComponent } from './remove-bill.component';

describe('RemoveBillComponent', () => {
  let component: RemoveBillComponent;
  let fixture: ComponentFixture<RemoveBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
