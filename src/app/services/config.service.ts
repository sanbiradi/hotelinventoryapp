import { Inject, Injectable } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';
import { RouteConfig } from './routeConfig';
import { routeConfigToken } from './routeConfig.service';

@Injectable({
  // providedIn: 'root'//it provides sington instances for this services

  providedIn: 'any', // it provides sperates instances for lazy loaded modules
})
export class ConfigService {
  constructor(@Inject(routeConfigToken) private routeConfig: RouteConfig) {
    console.log('config services called');
    console.log(this.routeConfig.title);
  }
}
