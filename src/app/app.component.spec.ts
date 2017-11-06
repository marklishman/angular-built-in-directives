import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgClassComponent } from './ng-class.component';
import { NgClass } from '@angular/common';

describe('NgClassComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgClassComponent
      ],
    }).compileComponents();
  }));

  it(`should have some tests`, async(() => {
    const fixture = TestBed.createComponent(NgClassComponent);
    const app = fixture.debugElement.componentInstance;
    // tests here
  }));

});
