import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  turma = 809
  showOnConsole(value: string) {
    console.log(value)
  }

}
