import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  //templateUrl: './success-alert.component.html',
  template: `
    <h3>success-alert works!</h3>
  `,
  //styleUrls: ['./success-alert.component.css']
  styles:[`
    h3{
      color: #00FA9A;
      padding: 10px;
      background-color: green;
      border: 1px solid green;
    }
  `]
})
export class SuccessAlertComponent {

}
