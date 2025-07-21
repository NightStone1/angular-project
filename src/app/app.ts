import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-project');
  clickCount = 0;
  bgColor = 'white';

  incrementClick() {
    this.clickCount++;
  }

  changeBackground() {
    this.bgColor = this.bgColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}
