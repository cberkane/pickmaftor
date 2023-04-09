import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private title = 'PMF';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const subtitle = this.route.firstChild.routeConfig.data['title'];
        const title = subtitle ? `${this.title} - ${subtitle}` : this.title;
        this.titleService.setTitle(title);
      }
    });
  }
}
