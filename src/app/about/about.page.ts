import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {
  version = environment.version
}
