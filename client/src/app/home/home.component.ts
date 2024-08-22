import { Component } from '@angular/core';
import { ReusableHomeComponent } from '../reusable-home/reusable-home.component';
import { SubServicesComponent } from '../sub-services/sub-services.component';
import { SubAboutComponent } from '../sub-about/sub-about.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { SubBlogComponent } from '../sub-blog/sub-blog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReusableHomeComponent,
     SubServicesComponent,
      SubAboutComponent,
       ReviewsComponent,
       SubBlogComponent 
],
      
  template: `

  
<app-reusable-home 
  [title]="'Modern Interior Design Studio'"
  [description]="'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.'"
  [imagePath]="'/images/couch.png'">
</app-reusable-home>

<app-sub-services></app-sub-services>
<app-sub-about></app-sub-about>
<section>
  <div class="card">
     
  </div>
  <div class="card">
     <img src="" alt="" srcset="">
     </div>
     <div class="card">
     
     </div>
  
</section>
<app-reviews></app-reviews>
<app-sub-blog></app-sub-blog>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
