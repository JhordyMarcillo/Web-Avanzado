import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-config-child',
  templateUrl: './config-child.component.html',
  styleUrls: ['./config-child.component.css']
})
export class ConfigChildComponent {
  @Input() config!: { language: string; theme: string };
}
