import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostListComponent } from '../post-list/post-list.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
   selector: 'app-post-detail',
   standalone: true,
   imports: [RouterLink],
   templateUrl: './post-detail.component.html',
   encapsulation: ViewEncapsulation.None,
   styleUrl: "./post-detail.component.css"
})
export class PostDetailComponent implements OnInit {
   id: any;
   postDetails: any;

   constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

   ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
         this.id = params.get('id');
         this.postDetails = this.getPostDetails(this.id - 1);
      });
   }

   getPostDetails(id: number): object {
      return new PostListComponent().posts[id];
   }
   getFormattedLongDescription(): SafeHtml {
      const paragraphs = this.postDetails.longDescription.split('<br>');
      const formattedDescription = paragraphs.map(
         (paragraph: any) => `<p class="text-wrap text-justify text-indent">${paragraph}</p>`).join('');
      return this.sanitizer.bypassSecurityTrustHtml(formattedDescription);
   }
}