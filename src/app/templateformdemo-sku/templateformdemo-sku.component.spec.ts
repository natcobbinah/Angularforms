import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformdemoSkuComponent } from './templateformdemo-sku.component';

describe('TemplateformdemoSkuComponent', () => {
  let component: TemplateformdemoSkuComponent;
  let fixture: ComponentFixture<TemplateformdemoSkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateformdemoSkuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateformdemoSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
