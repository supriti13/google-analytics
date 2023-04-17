import { Component } from '@angular/core';
import{Router, NavigationEnd} from '@angular/router';
import{GoogleAnalyticsService} from './google-analytics.service';
declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'analytics-with-angular';
  constructor(public router: Router, public googleAnalyticsService:GoogleAnalyticsService){   
      this.router.events.subscribe(event => {
         if(event instanceof NavigationEnd){
             gtag('config', 'G-PGSPQF5C1P', 
                   {
                     'page_path': event.urlAfterRedirects
                   }
                  );
          }
       }
    )}
    SendAddToCartEvent(){ 
      this
      .googleAnalyticsService
      .eventEmitter("add_to_cart", "shop", "cart", "click", 10);
    } 
}
