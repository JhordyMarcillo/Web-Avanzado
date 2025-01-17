import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-config',
  templateUrl: './parent-config.component.html',
  styleUrls: ['./parent-config.component.css']
})
export class ParentConfigComponent {
  config = {
    language: 'en',
    theme: 'dark'
  };
}
