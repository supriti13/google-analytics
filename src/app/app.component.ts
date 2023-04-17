import { Component } from '@angular/core';
import{Router, NavigationEnd} from '@angular/router';
import{GoogleAnalyticsService} from './google-analytics.service';
import { filter } from 'rxjs';
declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'analytics-with-angular';
  constructor(public router: Router, public googleAnalyticsService:GoogleAnalyticsService){   
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
       gtag('event', 'page_view', {
          page_path: event.urlAfterRedirects
       })
    })
    }
    SendAddToCartEvent(){ 
      this.router.navigateByUrl('shop')
      this.googleAnalyticsService.addaAnalytics("LoginEvent",{data:'data'})
      // this
      // .googleAnalyticsService
      // .eventEmitter("add_to_cart", "shop", "cart", "click", 10);
    } 
    
}
