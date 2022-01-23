import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisBuscarComponent } from './pais-buscar.component';

describe('PaisBuscarComponent', () => {
  let component: PaisBuscarComponent;
  let fixture: ComponentFixture<PaisBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
