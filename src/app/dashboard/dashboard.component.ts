import { Component, OnInit, Injectable } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
@Injectable()
export class DashboardComponent implements OnInit {

  constructor(private API: ApiService) { }

  ngOnInit() {
    this.API.getMarketData('test');
  }

}
