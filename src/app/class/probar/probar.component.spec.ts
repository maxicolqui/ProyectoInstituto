import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbarComponent } from './probar.component';

describe('ProbarComponent', () => {
  let component: ProbarComponent;
  let fixture: ComponentFixture<ProbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProbarComponent]
    });
    fixture = TestBed.createComponent(ProbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
