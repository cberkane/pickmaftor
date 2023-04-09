import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {

  @ViewChild('icon') iconRef: ElementRef<HTMLElement>;
  @Input() icon: string;
  @Input() width: string = '20px';
  @Input() height: string = '20px';

  constructor() { }

  ngAfterViewInit(): void {
    if (!this.icon) return;
    this.iconRef.nativeElement.style.backgroundImage = `url('${environment.pathAssets}/icons/${this.icon}.svg')`;
    this.iconRef.nativeElement.style.width = this.width;
    this.iconRef.nativeElement.style.height = this.height;
  }

}
