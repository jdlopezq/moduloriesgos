import {Component, AfterViewInit, Input, Output, EventEmitter,
  ElementRef, ChangeDetectorRef, Injectable, OnInit } from '@angular/core';
import {Http, Headers, Response, Jsonp} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-php-component',
  templateUrl: './php-component.component.html',
  styleUrls: ['./php-component.component.css']
})
export class PhpComponentComponent implements OnInit {
  public data: any;
  dataHttp:string="test.php";

  public constructor(private http: Http, public element: ElementRef, 
                  private cdRef: ChangeDetectorRef) {
      this.element = this.element.nativeElement;
  }

  public getData() {
    this.http.get(this.dataHttp).map((response: Response) => response.json())
    .subscribe(result => {
        this.data = result;
        console.dir(this.data);
    });
  }

  ngOnInit() {
       this.getData();
  }

}
