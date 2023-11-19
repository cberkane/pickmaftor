import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() overlayRef: OverlayRef;

  constructor() { }

  close(): void {
    this.overlayRef.detach();
  }
}
