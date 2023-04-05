import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  
  @ViewChild('sidenav') sidenav: TemplateRef<any>;
  overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    private vcr: ViewContainerRef
  ) { }


  openMenu(): void {
    this.overlayRef = this.overlay.create({
      width: '50%',
      height: '100vh',
      scrollStrategy: this.overlay.scrollStrategies.close(),
      positionStrategy: this.overlay.position().global(),
    });

    const sidenav = new TemplatePortal(this.sidenav, this.vcr);
    this.overlayRef.attach(sidenav);
    }
}
