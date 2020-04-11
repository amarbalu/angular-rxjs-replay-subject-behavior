import { Component } from '@angular/core';
import {DataService} from './data.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Subject - rxjs';
  
  constructor(private service:DataService){

  }
  ngOnInit(){
  // this.service.sub$.subscribe(value => console.log('subs$-subscribe - app',value))
  // this.service.sub$.next() -- there is next
  // this.service.obs$.next() - no next() param if we use subject as observer
  // this.service.obs$.subscribe(value => console.log('obs$-subscribe - app',value))
  }
  emit(){
    this.service.emit();
  }
}
