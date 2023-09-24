import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Icons } from './icons.enum';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit, AfterViewInit {

  @Input() icon: string;
  @Input() size: string = '18px';
  @ViewChild('icon') iconRef: ElementRef<HTMLElement>;
  
  icons = Icons;
  iconPath: string;

  ngOnInit(): void {
    if (!this.icon) return;
    this.iconPath = `/assets/icon/${this.icon}.svg#${this.icon}`;
  }
  
  ngAfterViewInit(): void {
    this.iconRef.nativeElement.style.width = this.size; 
    this.iconRef.nativeElement.style.height = this.size; 
  }

}
