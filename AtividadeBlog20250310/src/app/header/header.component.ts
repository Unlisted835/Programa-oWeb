import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
   selector: 'app-header',
   imports: [NgbNavModule, RouterLink, RouterLinkActive],
   templateUrl: './header.component.html',
   styleUrl: './header.component.css'
})
export class HeaderComponent {
   active = 1;
}
