import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}

  // メニューバー変数
  menus = ["top","consept","portfolio","movie","contact"];

  title = 'style';
}
