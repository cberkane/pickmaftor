import { animate, style, transition, trigger } from '@angular/animations';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Icon } from '../icon/icon.enum';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ width: '0%' }),
        animate(200, style({ width: '100%' }))
      ]),
      transition('* => void', [
        animate(200, style({ width: '0%' }))
      ]),
    ])
  ]
})
export class NavComponent {
  @ViewChild('sidenav') sidenav: TemplateRef<any>;
  public overlayRef: OverlayRef;
  public icons = Icon;

  constructor(
    private overlay: Overlay,
    private vcr: ViewContainerRef
  ) {
    console.log(environment.production)
  }


  openMenu(): void {
    this.overlayRef = this.overlay.create({
      width: '100%',
      height: '100vh',
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.close(),
      positionStrategy: this.overlay.position().global(),
    });

    const sidenav = new TemplatePortal(this.sidenav, this.vcr);
    this.overlayRef.attach(sidenav);
  }
}
