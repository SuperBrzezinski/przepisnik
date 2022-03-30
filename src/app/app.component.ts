import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  static x = 5;
  test = true;
  private zx = [10, 2, 3];

  public nope() {
    this.do();
  }

  private do() {
    console.log(this.zx);
  }
}
