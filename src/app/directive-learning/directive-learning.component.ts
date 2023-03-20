import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-learning',
  templateUrl: './directive-learning.component.html',
  styleUrls: ['./directive-learning.component.css']
})
export class DirectiveLearningComponent {
  isPasswordActiveHidden = false;
  passwordActiveHiddens = [];

  passwordActiveHidden(){
    this.isPasswordActiveHidden = !this.isPasswordActiveHidden;
    // this.passwordActiveHiddens.push(this.passwordActiveHiddens.length +1);
    this.passwordActiveHiddens.push(new Date());
  }

  getColor(){
    return this.isPasswordActiveHidden ? 'green' : 'red';
  }
}
