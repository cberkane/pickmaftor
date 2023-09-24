import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Input } from '@angular/core';
import { Icons } from '../icon/icons.enum';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() overlayRef: OverlayRef;
  icons = Icons;

  constructor() { }

  close(): void {
    this.overlayRef.detach();
  }
}
