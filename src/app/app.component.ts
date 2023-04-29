import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pString = 'Secret Password=tuna';
  showParagraph = false;
  newParagraphs = [];

  constructor() {}

  toggleButtonHandler() {
    this.showParagraph = !this.showParagraph;
    this.newParagraphs.push(this.newParagraphs.length + 1);
  }
}
