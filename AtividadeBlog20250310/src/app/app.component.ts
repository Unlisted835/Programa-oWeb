import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';

@Component({
   selector: 'app-root',
   imports: [
      RouterOutlet,
      HeaderComponent,
      HomeComponent,
      PostListComponent,
      PostDetailComponent,
      AboutComponent,
      NotFoundComponent
   ],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'AtividadeBlog20250310';
}
