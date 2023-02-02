import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  inject,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { localStorageToken } from './localstorage.token';
import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  role = 'admin';


  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit() {
    // this.route.events.subscribe((event)=>console.log(event))
    this.name.nativeElement.innerText = 'hi bhidu...';
    this.localStorage.setItem('name', 'Hilton Hotel');
  }
  
  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: any,
    private route:Router
  ) {}

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   // load component dynamically
  //   componentRef.instance.roomsCount= 90;
  // }
}
