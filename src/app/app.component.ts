import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

class Customer {
  id: number;
  name: string;
  email: string;
  tel: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  customersObservable: Observable<Customer[]>;

  constructor(private httpClient: HttpClient) {}

  title = 'app';

  sendInform() {
    debugger;
    this.customersObservable = this.httpClient.post<Customer[]>('/customers', {});
    this.customersObservable.subscribe(function(val) {
          console.log('POST call successful value returned in body', val);
      },
      function(response) {
          console.log('POST call in error', response);
      },
      function() {
          console.log('The POST observable is now completed.');
      });
  }

  ngOnInit(): void { // 初始化时就开始get请求数据

  }
}
