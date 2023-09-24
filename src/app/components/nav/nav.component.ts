import { animate, style, transition, trigger } from '@angular/animations';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Icons } from '../icon/icons.enum';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ width: '0%' }),
        animate(100, style({ width: '100%' }))
      ]),
      transition('* => void', [
        animate(100, style({ width: '0%' }))
      ]),
    ])
  ]
})
export class NavComponent {
  @ViewChild('sidenav') sidenav: TemplateRef<any>;
  public overlayRef: OverlayRef;
  public icons = Icons;

  constructor(
    private overlay: Overlay,
    private vcr: ViewContainerRef
  ) { }

  openMenu(): void {
    this.overlayRef = this.overlay.create({
      width: '80%',
      height: '100vh',
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.close(),
      positionStrategy: this.overlay.position().global(),
    })

    const sidenav = new TemplatePortal(this.sidenav, this.vcr);
    this.overlayRef.attach(sidenav);
    this.overlayRef.backdropClick().subscribe(clc => console.log('clc', clc));
  }
}
