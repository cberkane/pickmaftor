import { Icon } from './../icon/icon.enum';
import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() overlayRef: OverlayRef;
  public crossIcon = Icon.CROSS;

  constructor() { }

  close(): void {
    this.overlayRef.detach();
  }
}
