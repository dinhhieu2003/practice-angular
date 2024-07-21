import { Component } from '@angular/core';
import { ContentComponent } from "../content/content.component";

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {

}
