import { Component, Input } from '@angular/core';
import {DataService} from './data.service';
@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
   constructor(private service:DataService){

  }
  ngOnInit(){
  // this.service.sub$.subscribe(value => console.log('subs$ - subscribe - hello',value))
  
  // this.service.obs$.subscribe(value => console.log('obs$ - subscribe - hello',value))
  // this.service.obb$.subscribe(value => console.log('bhs$ - subscribe - hello',value))
  
  this.service.rpb$.subscribe(value => console.log('rps$ - subscribe - hello',value))
  
  }
}
