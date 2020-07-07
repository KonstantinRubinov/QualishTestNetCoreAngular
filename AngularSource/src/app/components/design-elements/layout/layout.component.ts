import { Component, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private allData:AllDataService) {}

  ngOnInit() {
    this.allData.GetAllMyData();
  }

}
