import {Injectable} from "@angular/core";
import {Subject,Observable, BehaviorSubject,ReplaySubject} from "rxjs";

@Injectable()
export class DataService {
data:number[]=[];
 sub$:Subject<number>
 obs$:Observable<number>
 bhs$:BehaviorSubject<number>
  obb$:Observable<number>
  rps$:ReplaySubject<number>
  rpb$:Observable<number>
constructor(){
// subject emits after afer next() triggers
this.sub$=new Subject<number>();
// BehaviorSubject also  emits after afer next() triggers but it emits the default faulur in bracket
this.bhs$=new BehaviorSubject<number>(1000)
//subject as observable helps to provide full control of next function alias subject can able to emit next event where ever possible.
// so keep sub$ as private

//Replay subject helps to keep value emmitted in memory upto it found
this.rps$=new ReplaySubject<number>(2)
this.obs$=this.sub$.asObservable();
this.obb$=this.bhs$.asObservable();
this.rpb$=this.rps$.asObservable();

}

emit(){
  this.sub$.next(Math.random());
  this.bhs$.next(Math.random());
    this.rps$.next(Math.random());
  
}
}