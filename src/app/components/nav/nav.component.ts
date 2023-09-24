import { animate, style, transition, trigger } from '@angular/animations';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Icons } from '../icon/icons.enum';
import { NavigationEnd, Router } from '@angular/router';

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
export class NavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: TemplateRef<any>;
  public overlayRef: OverlayRef;
  public icons = Icons;
  public displayMenu: boolean;

  constructor(
    private overlay: Overlay,
    private vcr: ViewContainerRef,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) this.onDisplayMenu(event);
    });
  }

  private onDisplayMenu(event: NavigationEnd): void {
    const path = event.url.split('?')[0];
    const whiteListpaths = ['/home'];
    if (whiteListpaths.includes(path)) this.displayMenu = true;
    else this.displayMenu = false;
  }

  openMenu(): void {
    this.overlayRef = this.overlay.create({
      width: '80%',
      height: '100vh',
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.close(),
      positionStrategy: this.overlay.position().global(),
    });

    const sidenav = new TemplatePortal(this.sidenav, this.vcr);
    this.overlayRef.attach(sidenav);
    this.overlayRef.backdropClick().subscribe(() => this.overlayRef.detach());
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

}
