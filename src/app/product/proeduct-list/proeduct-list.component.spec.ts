import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProeductListComponent } from './proeduct-list.component';

describe('ProeductListComponent', () => {
  let component: ProeductListComponent;
  let fixture: ComponentFixture<ProeductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProeductListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProeductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
