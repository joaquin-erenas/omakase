import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaOmakaseComponent } from './tienda-omakase.component';

describe('TiendaOmakaseComponent', () => {
  let component: TiendaOmakaseComponent;
  let fixture: ComponentFixture<TiendaOmakaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaOmakaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaOmakaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
