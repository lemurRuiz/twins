import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnbertoComponent } from './anberto.component';

describe('AnbertoComponent', () => {
  let component: AnbertoComponent;
  let fixture: ComponentFixture<AnbertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnbertoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnbertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
