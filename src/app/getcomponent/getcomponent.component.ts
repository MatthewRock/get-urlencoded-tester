import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-getcomponent',
  templateUrl: './getcomponent.component.html',
  styleUrls: ['./getcomponent.component.css']
})
export class GetcomponentComponent implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit() {
    }

    run() {
        this.http.get('http://localhost:8000/me',
                      {headers: new HttpHeaders(
                          {'Content-Type' : 'application/x-www-form-urlencoded'}
                      )}).subscribe(res => console.log(res))
    }

}
