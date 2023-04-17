import { Injectable } from '@angular/core';
import { getAnalytics, logEvent } from 'firebase/analytics';
declare let gtag:Function;
@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  addaAnalytics(eventName: any, dataObj: any) {
    console.log(eventName, dataObj);
    const analytics = getAnalytics();
    logEvent(analytics, eventName , dataObj);
  }
  public eventEmitter( 
    eventName: string, 
    eventCategory: string, 
    eventAction: string, 
    eventLabel: string ,  
    eventValue: number ){ 
         gtag('event', eventName, { 
                 eventCategory: eventCategory, 
                 eventLabel: eventLabel, 
                 eventAction: eventAction, 
                 eventValue: eventValue
               })
    }
  constructor() { }
}
