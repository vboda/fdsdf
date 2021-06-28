import { Component, OnInit, AfterViewInit } from '@angular/core';
import { of, Observable, interval, range } from 'rxjs';
import { switchMap, debounceTime, catchError, mergeMap, concatMap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit, AfterViewInit {
  myGroup: FormGroup;
  result: Observable<any>
   // textbox = new FormControl(' ')
  value:Observable<string>

  constructor(private http: HttpClient) {
     
  }

  ngOnInit(): void {
    // this.executeSwitchMap();
    this.myGroup = new FormGroup({
      firstName: new FormControl()
   });

  //  range(1,10).pipe(
  //    mergeMap( (value) =>{
  //     console.log(value);
  //     return this.http.get(`http://localhost:3621/${value}`);
  //    }),
  //    catchError((err) => of(err))
  //  ).subscribe((res) => {
  //    console.log('res', res);
  //    this.result = of(res)
  //  })
   this.executeSwitchMap();
   // mergeMap
  //   will call the calls asynchromnously
  }
  ngAfterViewInit(){
  }

  executeSwitchMap(){
    this.myGroup.get('firstName').valueChanges.pipe(
      debounceTime(1000),
      switchMap((value): any => {
        console.log(value);
        interval(1000);
      }),
      catchError((err) => err)
    ).subscribe((res) => {
      console.log(res);
      this.result = of(res);
    },
    (err) => console.log(err))
  }
}
