import { Component } from '@angular/core';
import { MvmCardComponent } from '@michel-bittencourt/mvm';

@Component({
  selector: 'app-root',
  imports: [MvmCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'schoolSync';
}
