import { Component } from '@angular/core';
import axios from 'axios'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sub-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-blog.component.html',
  styleUrl: './sub-blog.component.scss'
})
export class SubBlogComponent {

  blogs:any [] = [];

  ngOnInit(){
    this.fetchBlogs();
  }

  fetchBlogs(){
    axios.get('http://localhost:4001/blogs')
    .then(response => {
      this.blogs= response.data.slice(0, 3);
      console.log(this.blogs);
    })
    .catch(error => {
      console.error('There was an error fetching the products!', error);
    });
  }

}
