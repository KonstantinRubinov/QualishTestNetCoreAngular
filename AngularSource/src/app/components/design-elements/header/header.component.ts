import { Component, OnInit } from '@angular/core';
import { MyNavigator } from 'src/app/models/MyNavigator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }

  public ngOnInit() {
  }

  public navigators = [
    new MyNavigator("/AppointmentsTable", 'Appointments Table'),
    new MyNavigator("/AppointmentTypesTable", 'Appointment Types Table')
  ];
  
}