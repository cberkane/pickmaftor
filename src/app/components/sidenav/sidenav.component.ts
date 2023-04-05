import { animate, style, transition, trigger } from '@angular/animations';
import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ width: '0%' }), 
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ width: '10%'}))
      ]),
    ])
  ]
})
export class SidenavComponent implements OnInit {
  @Input('nav') nav: string;
  @Input() overlayRef: OverlayRef;

  constructor() { }

  ngOnInit(): void {
    console.log('Init')
  }

  ngOnDestroy(): void {
    console.log('Destroy')
  }

  close() {
    this.overlayRef.detach();
  }
}
