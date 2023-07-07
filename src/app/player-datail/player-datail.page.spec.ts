import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerDatailPage } from './player-datail.page';

describe('PlayerDatailPage', () => {
  let component: PlayerDatailPage;
  let fixture: ComponentFixture<PlayerDatailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlayerDatailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
