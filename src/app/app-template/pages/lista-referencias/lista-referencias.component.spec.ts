import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReferenciasComponent } from './lista-referencias.component';

describe('ListaReferenciasComponent', () => {
  let component: ListaReferenciasComponent;
  let fixture: ComponentFixture<ListaReferenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaReferenciasComponent]
    });
    fixture = TestBed.createComponent(ListaReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
